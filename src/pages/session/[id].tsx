import Head from 'next/head'
import { useSession } from 'next-auth/react'

import { Navbar } from '@/components/navbar'
import { useEffect, useRef, useState } from 'react'
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import type { RtmChannel } from 'agora-rtm-sdk'

import dynamic from 'next/dynamic'
import { trpc } from '@/shared/trpc'
import { useRouter } from 'next/router'
import { User } from '@/shared/user'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Agora = dynamic(() => import('agora-react-uikit'), {
  ssr: false,
})

interface Message {
  text: string
  mine: boolean
}

export interface SessionState {
  appId: string
  partner: Omit<User, 'email'>
  channel: string
  rtcToken: string
  rtmToken: string
  uid: string
}

export default function Home() {
  const router = useRouter()
  const getSessionDetails = trpc.getSessionDetails.useMutation()
  const [sessionState, setSessionState] = useState<SessionState>()
  const { data: userSession } = useSession()

  const [msg, setMsg] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const channelRef = useRef<RtmChannel>()
  const messageElementRef = useRef<any>()

  useEffect(() => {
    if (messageElementRef.current)
      messageElementRef.current.scrollTop =
        messageElementRef.current.scrollHeight
  })

  const onSendMessage = async () => {
    await channelRef.current?.sendMessage({ text: msg })

    setMessages((m) => [...m, { mine: true, text: msg }])
    setMsg('')
  }

  const init = async (sessionId: string, myId: string) => {
    const session = await getSessionDetails.mutateAsync(sessionId)
    const appId = process.env.NEXT_PUBLIC_AGORA_APP_ID || ''

    // init chat
    const { default: AgoraRTM } = await import('agora-rtm-sdk')
    const chat = AgoraRTM.createInstance(appId)
    const channel = chat.createChannel(`chat:${sessionId}`)

    channel.on('ChannelMessage', ({ text }) => {
      setMessages((items) => [...items, { mine: false, text: text! }])
    })

    await chat.login({ uid: session.chatUid, token: session.rtmChatToken })
    await channel.join()
    channelRef.current = channel

    setSessionState({
      appId,
      channel: sessionId,
      ...session,
    })

    return async () => {
      await channel.leave()
      await chat.logout()
    }
  }

  useEffect(() => {
    if (!userSession?.user?.email || !router.query.id) return
    const cleanFunc = init(router.query.id as string, userSession?.user?.email)

    return () => {
      cleanFunc.then((func) => func())
    }
  }, [userSession?.user?.email, router.query.id])

  return (
    <>
      <Head>
        <title>Live Lingo</title>
      </Head>
      <Flex h="100vh" flexDirection="column">
        <Navbar />

        <Flex flex={1}>
          <Flex flex={1} position="relative" bg="gray.400">
            {sessionState && (
              <Agora
                key={sessionState.uid}
                styleProps={{
                  localBtnContainer: {
                    backgroundColor: 'rgba(255,0,0,0.0)',
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    width: '300px',
                  },
                }}
                rtcProps={{
                  appId: sessionState.appId,
                  channel: sessionState.channel,
                  token: sessionState.rtcToken,
                  layout: 0,
                }}
                rtmProps={{
                  uid: sessionState.uid,
                  token: sessionState.rtmToken,
                }}
                callbacks={{
                  EndCall: () => router.replace('/'),
                }}
              />
            )}
          </Flex>

          <Flex w={400} borderLeftWidth={1} bg="white" flexDirection="column">
            {/* USER */}
            <Flex p={4} alignItems="center" borderBottomWidth={1}>
              <img
                alt="user image"
                src={sessionState?.partner.image}
                width="40px"
                height="40px"
                referrerPolicy="no-referrer"
                style={{ borderRadius: '100%' }}
              />
              <Flex direction="column" ml={3}>
                <Text fontWeight="medium">{sessionState?.partner.name}</Text>
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="2xs"
                  color="gray.500"
                >
                  Rating: 4.2
                </Text>
              </Flex>
              <Flex flex={1} />
              <Button colorScheme="red">Report</Button>
            </Flex>

            <Flex flexDirection="column" flex={1} position="relative">
              <Box
                ref={messageElementRef}
                position="absolute"
                top={0}
                w="full"
                h="full"
                overflow="scroll"
              >
                {messages.map((t, i) => (
                  <Flex
                    key={i}
                    justifyContent={t.mine ? 'flex-end' : 'flex-start'}
                  >
                    <Flex
                      w="80%"
                      mx={4}
                      my={2}
                      px={3}
                      py={3}
                      borderRadius="lg"
                      backgroundColor={t.mine ? 'facebook.100' : 'gray.100'}
                      position="relative"
                      alignItems="center"
                    >
                      <Text>{t.text}</Text>
                      {t.mine && (
                        <Text
                          position="absolute"
                          right={3}
                          fontWeight="bold"
                          fontSize="xs"
                          color="gray.400"
                        >
                          YOU
                        </Text>
                      )}
                    </Flex>
                  </Flex>
                ))}
              </Box>
            </Flex>

            <Box p={4}>
              <InputGroup>
                <Input
                  placeholder="Enter message"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  onKeyUp={(e) => {
                    if (e.key === 'Enter') onSendMessage()
                  }}
                />
                <InputRightElement>
                  <Button
                    width={4}
                    height={9}
                    mr={1}
                    onClick={onSendMessage}
                    _hover={{ bg: 'green.500', color: 'white' }}
                  >
                    <ChevronRightIcon />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>

            <Flex p={5} justifyContent="center" borderTopWidth={1}>
              <Button
                w="full"
                colorScheme="green"
                onClick={() => {
                  if (!confirm('Are you sure you want to leave this chat?'))
                    return

                  router.replace('/')
                }}
              >
                Find Next Mate
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
