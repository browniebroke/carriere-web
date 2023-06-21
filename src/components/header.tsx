import React from 'react'
import { Link } from 'gatsby'
import { Box, Container, Flex, Stack } from '@chakra-ui/react'

import SiteLogo from '../images/icons/logo-compact.svg'
import SiteName from '../images/icons/logo-name.svg'

export const Header = () => (
  <Box
    as="header"
    backgroundColor="primary"
    color="white"
    sx={{
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
          <Link to="/" title="Acceuil" aria-label="Acceuil">
            <Flex height="site-logo.height">
              <Box as={SiteLogo} width="site-logo.iconWidth" />
              <Box
                as={SiteName}
                width={{ base: 'inherit', md: 'site-logo.nameWidth' }}
                display={{ base: 'none', md: 'inherit' }}
              />
            </Flex>
          </Link>
          <Stack direction="row" spacing={4}>
            <Link to="/produits/">Produits</Link>
            <Link to="/contact/">Contact</Link>
          </Stack>
        </Flex>
      </Box>
    </Container>
  </Box>
)
