import Head from 'next/head'
import { useSession } from 'next-auth/react'

import { Navbar } from '@/components/navbar'
import { Intro } from '@/components/intro'
import { SessionForm } from '@/components/session-form'
import { useState } from 'react'
import { Flex, Spinner, Text } from '@chakra-ui/react'

export default function Home() {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)

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
            {!loading && <SessionForm onSubmit={() => setLoading(true)} />}
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
