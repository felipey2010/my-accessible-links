import { useLinksManager } from '@links/context/Provider'
import { usePageManager } from '@home/context/Provider'

import { Box, Container, SimpleGrid, useColorModeValue } from '@chakra-ui/react'

import { GridLinks } from 'components'

export default function LinksContent() {
  const { content } = useLinksManager()
  const { language } = usePageManager()

  return (
    <Box
      px={{ base: '80px', sm: '85px' }}
      alignItems="center"
      justifyContent={'center'}
      height="calc((100%) - 120px)"
      bg={useColorModeValue('gray.200', 'gray.800')}
      overflowY="auto"
    >
      <Container maxW={'6xl'} mt={10} mb={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {content.map((res) => (
            <GridLinks
              key={res.id}
              link={res.link}
              image={res.image}
              description={res.description[language]}
              title={res.title[language]}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
