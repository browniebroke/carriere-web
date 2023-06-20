import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, ChakraProvider, Container } from '@chakra-ui/react'

import { Header } from './header'
import { Footer } from './footer'
import { SiteAlert } from './site-alert'
import { theme as chakraTheme } from '../utils/theme'

interface LayoutProps {
  marginTop?: number
  children?: React.ReactNode
}

const defaultMarginY = 10

export const Layout = ({
  marginTop = defaultMarginY,
  children,
}: LayoutProps) => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `
  )
  return (
    <>
      <ChakraProvider theme={chakraTheme}>
        <Helmet
          title={site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: site.siteMetadata.description,
            },
            { name: 'keywords', content: site.siteMetadata.keywords },
          ]}
        />
        <Header />
        <SiteAlert />
        <Container maxWidth="4xl">
          <Box
            marginBottom={defaultMarginY}
            marginTop={marginTop}
            minHeight="80vh"
          >
            {children}
          </Box>
        </Container>
        <Footer />
      </ChakraProvider>
    </>
  )
}
