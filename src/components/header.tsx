import React from 'react'
import Link from 'next/link'
import { Box, Container, Flex, Stack } from '@chakra-ui/react'

import SiteLogo from '../images/icons/logo-compact.svg'
import SiteName from '../images/icons/logo-name.svg'

export const Header = () => (
  <Box
    as="header"
    backgroundColor="primary"
    color="white"
    css={{
      'a, a:visited': {
        color: 'currentColor',
        textDecoration: 'none',
      },
      'a:hover, a:focus': {
        color: 'gray.300',
        textDecoration: 'none',
      },
    }}
  >
    <Container maxWidth="4xl">
      <Box as="nav" paddingY={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Link href="/" title="Acceuil" aria-label="Acceuil">
            <Flex height="site-logo.height">
              <Box as={SiteLogo} width="site-logo.iconWidth" />
              <Box
                as={SiteName}
                width={{ base: 'inherit', md: 'site-logo.nameWidth' }}
                display={{ base: 'none', md: 'inherit' }}
              />
            </Flex>
          </Link>
          <Stack direction="row" gap={4}>
            <Link href="/produits/">Produits</Link>
            <Link href="/contact/">Contact</Link>
          </Stack>
        </Flex>
      </Box>
    </Container>
  </Box>
)
