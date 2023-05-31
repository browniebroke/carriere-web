import React from 'react'
import { Link } from 'gatsby'

import { Layout } from '../components/layout'
import { Flex, Heading, Text } from '@chakra-ui/react'

const NotFoundPage = () => (
  <Layout>
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
        <Link to="/">Retour à l'acceuil</Link>
      </Text>
    </Flex>
  </Layout>
)

export default NotFoundPage
