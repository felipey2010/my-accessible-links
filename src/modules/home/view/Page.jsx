import MainLayout from '@layout/MainLayout'
import {
  VStack,
  Text,
  Heading,
  HStack,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'

import Head from 'next/head'

import { usePageManager } from '@home/context/Provider'

export default function HomePage() {
  const { content, language } = usePageManager()
  return (
    <MainLayout>
      <Head>
        <title>My Links - {content[0].title[language]}</title>
        <meta
          name="description"
          content="My resource page to keep important links accessible"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack
        px={{ base: '80px', sm: '85px' }}
        alignItems="center"
        justifyContent={'center'}
        height="calc((100%) - 120px)"
        overflowY="auto"
        bg={useColorModeValue('gray.200', 'gray.800')}
      >
        <VStack my="60px">
          <HStack justifyContent="center" py="20px">
            <Heading
              fontWeight={700}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
              textTransform={'uppercase'}
            >
              Links
              <Text as={'span'} color={'green.400'} marginLeft="12px">
                Drive
              </Text>
            </Heading>
          </HStack>
          <Text
            fontWeight="light"
            color="gray.500"
            paddingBottom="12px"
            textAlign={'center'}
            fontSize={{ base: '2xl' }}
          >
            {content[0].description[language]}
          </Text>

          <Button
            colorScheme={'green'}
            bg={'green.400'}
            rounded={'full'}
            px={6}
            _hover={{
              bg: 'green.500'
            }}
          >
            <Link href={content[0].link}>
              <a>{content[0].button[language]}</a>
            </Link>
          </Button>
        </VStack>
      </VStack>
    </MainLayout>
  )
}
