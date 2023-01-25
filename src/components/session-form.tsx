import { AllLanguages, Language, LanguageLevel } from '@/shared/language'
import { SearchIcon } from '@chakra-ui/icons'
import { Button, Container, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'

export interface SessionFormProps {
  onSubmit: (lang: Language, level: LanguageLevel) => void
}

export const SessionForm = ({ onSubmit }: SessionFormProps) => {
  const [language, setLanguage] = useState(Language.English)
  const [level, setLevel] = useState(LanguageLevel.Beginner)

  return (
    <Flex flexDirection="column" alignItems="center">
      <Text mt={10} fontWeight="bold" fontSize="2xl">
        Select Language:
      </Text>

      <Flex mt={4} w="full" maxW={600} flexWrap="wrap">
        {AllLanguages.map((t) => (
          <Flex key={t.key} w="33%" p={2}>
            <Flex
              px={4}
              py={1}
              borderWidth={2}
              flex={1}
              alignItems="center"
              borderRadius="lg"
              cursor="pointer"
              onClick={() => setLanguage(t.key as Language)}
              bg={language == t.key ? 'gray.300' : undefined}
              borderColor={language == t.key ? 'gray.400' : 'gray.200'}
            >
              <Text fontSize={30}>{t.icon}</Text>
              <Text ml={2} fontWeight="medium">
                {t.name}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>

      <Text mt={10} fontWeight="bold" fontSize="2xl">
        Select Level:
      </Text>

      <Flex mt={4} maxW={600} flexWrap="wrap" w="full">
        {[
          LanguageLevel.Beginner,
          LanguageLevel.Intermediate,
          LanguageLevel.Advanced,
        ].map((t) => (
          <Flex key={t} w="33%" p={2}>
            <Flex
              flex={1}
              px={4}
              py={3}
              borderWidth={2}
              borderRadius="lg"
              cursor="pointer"
              onClick={() => setLevel(t as LanguageLevel)}
              bg={level == t ? 'gray.300' : undefined}
              borderColor={level == t ? 'gray.400' : 'gray.200'}
              justifyContent="center"
            >
              <Text fontWeight="medium" textTransform="capitalize">
                {t}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>

      <Flex mt={20} justifyContent="center">
        <Button
          bg="green.400"
          color="white"
          px={20}
          py={7}
          leftIcon={<SearchIcon />}
          _hover={{ bg: 'green.300' }}
          onClick={() => onSubmit(language, level)}
        >
          Find Language Friend
        </Button>
      </Flex>
    </Flex>
  )
}
