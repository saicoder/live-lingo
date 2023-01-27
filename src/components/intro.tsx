import Head from 'next/head'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Link,
  Flex,
} from '@chakra-ui/react'

import { signIn } from 'next-auth/react'

export const Intro = () => {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Learn languages <br />
            <Text as={'span'} color={'green.400'}>
              by talking to real people
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Live Lingo is an online video chat platform for learning new
            languages. <br />
            It&apos;s completely free and easy to use. Sign in with your Google
            account and start learning today.
          </Text>
          <Stack
            direction={'column'}
            spacing={6}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button
              onClick={() => signIn()}
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={90}
              py={7}
              _hover={{
                bg: 'green.500',
              }}
            >
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
          </Stack>

          <Text color={'gray.500'}>
            With Live Lingo, you&apos;ll have access to a community of language
            learners from all over the world. Practice speaking, listening,
            reading, and writing with native speakers and improve your language
            skills faster. Sign up now and start speaking your target language
            like a pro!
          </Text>

          <Flex pt={180}>
            <Link href="mailto:saicoder.net@gmail.com">
              <Text>Contact Us</Text>
            </Link>
            <Flex flex={1} />
            <Link href="/privacy.html">
              <Text>Privacy Policy</Text>
            </Link>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}
