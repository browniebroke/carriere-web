import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, ChakraProvider, Container } from '@chakra-ui/react'
import { ThemeProvider } from 'styled-components'

import { Header } from './header'
import { Footer } from './footer'
import { SiteAlert } from './site-alert'
import { GlobalStyles } from './global-styles'
import { theme } from '../theme'
import { theme as chakraTheme } from '../utils/theme'

interface LayoutProps {
  paddingTop?: number
  children?: React.ReactNode
}

export const Layout = ({ paddingTop = 8, children }: LayoutProps) => {
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
        <ThemeProvider theme={theme}>
          <GlobalStyles />
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
            <Box paddingBottom={8} paddingTop={paddingTop} minHeight="80vh">
              {children}
            </Box>
          </Container>
          <Footer />
        </ThemeProvider>
      </ChakraProvider>
    </>
  )
}
