import React from 'react'
import { Box, Container, Flex, Icon, Link, Stack } from '@chakra-ui/react'

import Facebook from '../images/icons/facebook.svg'
import Phone from '../images/icons/phone.svg'

export const Footer = () => (
  <Box as="footer" backgroundColor="secondary" paddingY={9}>
    <Container maxWidth="4xl">
      <Flex
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
        textAlign={{ base: 'center', md: 'inherit' }}
      >
        <Box paddingBottom={6}>
          <Stack>
            <Link
              href="https://www.facebook.com/carrierealla/"
              title="Notre Page Facebook"
              target="_blank"
              rel="noopener noreferrer"
              justifyContent={{ base: 'center', md: 'inherit' }}
            >
              <Icon boxSize={5} marginRight={2}>
                <Facebook />
              </Icon>
              Facebook
            </Link>
            <Link
              href="tel:+33565621365"
              justifyContent={{ base: 'center', md: 'inherit' }}
            >
              <Icon boxSize={5} marginRight={2}>
                <Phone />
              </Icon>
              Tel: 05 65 62 13 65
            </Link>
          </Stack>
        </Box>
        <Box paddingBottom={6}>
          <Link
            href="https://www.infogreffe.fr/entreprise-societe/812786986"
            title="Info Greffe"
            target="_blank"
            rel="noopener noreferrer"
          >
            SIRET 812 786 986 R.C.S. RODEZ
          </Link>
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <Box textAlign="center" fontSize="0.7em">
          Icônes (
          <Link
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC 3.0 BY
          </Link>
          ):
          <Stack direction="row">
            <Link
              href="https://www.freepik.com/"
              title="Freepik"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freepik
            </Link>
            <Link
              href="https://www.flaticon.com/authors/gregor-cresnar"
              title=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Gregor Cresnar
            </Link>
            <Link
              href="https://www.flaticon.com/authors/pixel-perfect"
              title=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixel perfect
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Container>
  </Box>
)
