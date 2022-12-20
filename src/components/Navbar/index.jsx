import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  // useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton
} from '@chakra-ui/react'

import { FaMoon, FaSun } from 'react-icons/fa'
import { MdLanguage } from 'react-icons/md'

import { usePageManager } from '@home/context/Provider'

import { ChevronDownIcon, ArrowBackIcon, ChevronUpIcon } from '@chakra-ui/icons'

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const { setLanguage, language, backLink } = usePageManager()
  const router = useRouter()

  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={{ base: '15px', sm: '85px' }}
      w="full"
      m="0"
      boxShadow={'md'}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        {/* Text Logo */}
        <Box as="text" fontWeight={700} fontSize="lg">
          {router.asPath != '/' ? (
            <Link href={backLink}>
              <a>
                <IconButton
                  aria-label="Back"
                  icon={<ArrowBackIcon />}
                  _hover={{
                    bg: useColorModeValue('gray.200', 'whiteAlpha.200')
                  }}
                  bg={useColorModeValue('gray.100', 'gray.900')}
                  mr="8px"
                />
              </a>
            </Link>
          ) : null}
          <Link href="/">
            <a>{data[0].text[language]}</a>
          </Link>
        </Box>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Button
              onClick={toggleColorMode}
              _hover={{ bg: useColorModeValue('gray.200', 'whiteAlpha.200') }}
              bg={useColorModeValue('gray.100', 'gray.900')}
            >
              {colorMode === 'light' ? <FaMoon /> : <FaSun />}
            </Button>

            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    isActive={isOpen}
                    as={Button}
                    h="12px"
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    p={2}
                    minW={0}
                    color={useColorModeValue('black', 'white')}
                    _hover={{
                      bg: useColorModeValue('gray.200', 'whiteAlpha.200')
                    }}
                    rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  >
                    <MdLanguage />
                  </MenuButton>
                  <MenuList alignItems={'center'} zIndex={100}>
                    <MenuItem onClick={() => setLanguage('en')}>
                      English
                    </MenuItem>
                    <MenuItem onClick={() => setLanguage('pt')}>
                      Português
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}

const data = [
  {
    id: 1,
    text: {
      en: 'My Links',
      pt: 'Meus Links'
    }
  }
]
