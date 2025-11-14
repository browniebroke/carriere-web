import React from 'react'
import Link from 'next/link'
import { Flex, Heading, Text } from '@chakra-ui/react'

export default function NotFound() {
  return (
    <Flex
      minHeight="60vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading as="h1">Page introuvable</Heading>
      <Text>
        Cette page n'existe pas... <br />
      </Text>
      <Text>
        <Link href="/">Retour à l'acceuil</Link>
      </Text>
    </Flex>
  )
}
