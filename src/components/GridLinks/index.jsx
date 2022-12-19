import Link from 'next/link'
import { GridItem } from '@chakra-ui/react'

import LinkContainer from './components/LinkContainer'

export default function GridLinks({ description, image, link, title }) {
  return (
    <GridItem w="100%" cursor={'pointer'}>
      <Link href={link}>
        <a>
          <LinkContainer
            description={description}
            image={image}
            title={title}
          />
        </a>
      </Link>
    </GridItem>
  )
}
