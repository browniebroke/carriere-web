import React from 'react'
import Link from 'next/link'
import { Container, Flex } from '@chakra-ui/react'

export default function NotFound() {
  return (
    <div>
      <h1>Page introuvable</h1>
      <p>Cette page n&apos;existe pas...</p>
      <Link href="/">Retour à l&apos;acceuil</Link>
    </div>
  )
}
