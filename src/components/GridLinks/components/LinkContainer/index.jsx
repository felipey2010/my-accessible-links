import {
  Box,
  Image,
  Stack,
  Text,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'

export default function LinkContainer({ description, image, title }) {
  return (
    <Box
      role={'group'}
      p={6}
      maxW={'330px'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}
    >
      <Box
        rounded={'lg'}
        mt={-4}
        pos={'relative'}
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 5,
          left: 0,
          backgroundImage: `url(${image})`,
          filter: 'blur(15px)',
          zIndex: -1
        }}
        _groupHover={{
          _after: {
            filter: 'blur(20px)'
          }
        }}
      >
        <Image
          rounded={'lg'}
          width="100%"
          height="100%"
          objectFit={'cover'}
          src={image}
        />
      </Box>
      <Stack pt={10} align={'center'}>
        <Text
          color={useColorModeValue('gray.600', 'whiteAlpha.700')}
          fontSize={'sm'}
          textTransform={'uppercase'}
        >
          {description}
        </Text>
        <Heading
          fontSize={'2xl'}
          fontFamily={'body'}
          textAlign="center"
          textTransform={'uppercase'}
          fontWeight={500}
        >
          {title}
        </Heading>
      </Stack>
    </Box>
  )
}
