import { usePageManager } from '@home/context/Provider'
import { usePFManager } from '@pf/context/Provider'
import { SEO } from 'components'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  useColorModeValue,
  Link
} from '@chakra-ui/react'

import LinkContainer from './components/LinkContainer'

export default function PFPageContent() {
  const { content, header } = usePFManager()
  const { language } = usePageManager()
  return (
    <>
      <SEO
        title={header[0].head[language]}
        description={header[0].description[language]}
      />

      <Box
        p={4}
        px={{ base: '80px', sm: '85px' }}
        alignItems="center"
        justifyContent={'center'}
        height="calc((100%) - 120px)"
        bg={useColorModeValue('gray.200', 'gray.800')}
        overflowY="auto"
      >
        <Stack
          spacing={4}
          as={Container}
          maxW={'3xl'}
          textAlign={'center'}
          pb="12px"
          borderBottom="1px solid"
          borderColor={useColorModeValue('gray.300', 'whiteAlpha.200')}
        >
          <Heading fontSize={'3xl'}>{header[0].title[language]}</Heading>
          <Text
            color={useColorModeValue('gray.600', 'whiteAlpha.600')}
            fontSize={'xl'}
          >
            {header[0].description[language]}
          </Text>
        </Stack>

        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {content.map((res, index) => (
              <>
                {res.link ? (
                  <Link href={res.link} isExternal key={index}>
                    <LinkContainer item={res} />
                  </Link>
                ) : (
                  <LinkContainer item={res} key={index} />
                )}
              </>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}
