import { HStack, Link, useColorModeValue } from '@chakra-ui/react'

import { usePageManager } from '@home/context/Provider'

export default function Footer() {
  const { language } = usePageManager()
  return (
    <HStack
      w="100%"
      justifyContent="center"
      position="absolute"
      bottom={0}
      right={0}
      left={0}
      textAlign="center"
      bg={useColorModeValue('gray.100', 'gray.900')}
      p={4}
      borderTopWidth={1}
    >
      <Link
        href="https://github.com/felipey2010"
        isExternal
        _hover={{
          color: useColorModeValue('green.500', 'green.300'),
          transition: '0.3s ease-in-out'
        }}
        fontSize={'md'}
      >
        {data[0].text[language]} - {new Date().getFullYear()}
      </Link>
    </HStack>
  )
}

const data = [
  {
    id: 1,
    text: {
      en: 'Created by Felipey',
      pt: 'Criado por Felipey'
    }
  }
]
