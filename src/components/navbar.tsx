import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Avatar,
  Text,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from '@chakra-ui/react'
import { useSession, signOut, signIn } from 'next-auth/react'

import { Logo } from './logo'

export const Navbar = () => {
  const { data: session } = useSession()

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        justifyContent="center"
      >
        <Flex flex={1} maxW={'5xl'} alignItems="center">
          <Logo height={40} />

          <Box flex={1} />

          {!session && (
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}
              onClick={() => signIn()}
            >
              Sign In
            </Button>
          )}

          {session && (
            <Menu>
              <MenuButton>
                <Flex as={Flex} alignItems="center" cursor="pointer">
                  <Avatar
                    w={10}
                    h={10}
                    src={session.user?.image || undefined}
                  />
                  <Text ml={3} fontSize="sm" fontWeight="semibold">
                    {session.user?.name}
                  </Text>
                </Flex>
              </MenuButton>
              <MenuList mt={3}>
                <MenuItem
                  onClick={() => window.open('mailto:saicoder.net@gmail.com')}
                >
                  Help
                </MenuItem>
                <MenuItem onClick={() => signOut()}>Logout</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}
