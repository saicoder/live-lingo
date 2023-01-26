import Head from 'next/head'
import { useSession } from 'next-auth/react'

import { Navbar } from '@/components/navbar'
import { Intro } from '@/components/intro'
import { SessionForm } from '@/components/session-form'
import { useState } from 'react'
import { Flex, Spinner, Text, useToast } from '@chakra-ui/react'
import { Language, LanguageLevel } from '@/shared/language'
import { trpc } from '@/shared/trpc'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const createMatchingRequest = trpc.createMatchingRequest.useMutation()
  const isSessionReady = trpc.isSessionReady.useMutation()

  const onSubmit = async (language: Language, level: LanguageLevel) => {
    setLoading(true)

    const { requestId } = await createMatchingRequest.mutateAsync({
      language,
      level,
    })

    let iteration = 5

    while (--iteration >= 0) {
      const result = await isSessionReady.mutateAsync(requestId)

      if (result === true) {
        console.log('Ok found')
        router.push(`/session/${requestId}`)

        return
      } else {
        await new Promise((res) => setTimeout(res, 2000))
      }
    }

    toast({
      title: 'Could not find anyone in 10 seconds',
      description: 'Please try again',
      status: 'warning',
    })
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Live Lingo</title>
      </Head>
      <main>
        <Navbar />

        {!session && <Intro />}

        {session && (
          <>
            {!loading && <SessionForm onSubmit={onSubmit} />}
            {loading && (
              <Flex
                flexDirection="column"
                flex={1}
                alignItems="center"
                justifyContent="center"
                minH={300}
              >
                <Spinner
                  size="xl"
                  color="green.400"
                  emptyColor="gray.200"
                  thickness="4px"
                />
                <Text mt={4} fontWeight="medium">
                  Searching
                </Text>
              </Flex>
            )}
          </>
        )}
      </main>
    </>
  )
}
