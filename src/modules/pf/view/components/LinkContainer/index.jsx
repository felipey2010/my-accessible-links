import { usePageManager } from '@home/context/Provider'

import {
  Box,
  Icon,
  Text,
  HStack,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'

import { CheckIcon } from '@chakra-ui/icons'

export default function LinkContainer({ item }) {
  const { language } = usePageManager()
  return (
    <HStack key={item.id} align={'center'} height="100%">
      <Box color={'green.400'} px={2}>
        <Icon as={CheckIcon} />
      </Box>
      <VStack align={'start'} height="100%">
        <Text
          fontWeight={600}
          textTransform="capitalize"
          color={useColorModeValue('gray.700', 'whiteAlpha.800')}
        >
          {item.title[language]}
        </Text>
        <Text
          color={useColorModeValue('gray.600', 'whiteAlpha.700')}
          textAlign="justify"
        >
          {item.description[language]}
        </Text>
      </VStack>
    </HStack>
  )
}
