import React from 'react'
import Link from 'next/link'
import { Container, Flex, Heading, Text } from '@chakra-ui/react'

export default function NotFound() {
  return (
    <Container maxWidth="4xl">
      <Flex
        minHeight="60vh"
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop={10}
        marginBottom={10}
      >
        <Heading as="h1">Page introuvable</Heading>
        <Text>
          Cette page n&apos;existe pas... <br />
        </Text>
        <Text>
          <Link href="/">Retour à l&apos;acceuil</Link>
        </Text>
      </Flex>
    </Container>
  )
}
