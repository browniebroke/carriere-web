import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { ChakraProvider } from '@chakra-ui/react'
import styled, { ThemeProvider } from 'styled-components'
import { Container, ContentWrapper } from '@browniebroke/react-ui-components'
import { Theme } from '@browniebroke/react-ui-components/src/types'

import { Header } from './header'
import { Footer } from './footer'
import { SiteAlert } from './site-alert'
import { GlobalStyles } from './global-styles'
import { theme } from '../theme'
import { theme as chakraTheme } from '../utils/theme'

interface PageContentWrapperProps {
  theme: Theme
  pt?: string
}

// TODO: find a better solution
const PageContentWrapper = styled(ContentWrapper)<PageContentWrapperProps>`
  padding-top: ${(props) =>
    props.pt !== undefined ? props.pt : props.theme.spacings[4]};
  padding-bottom: ${(props) => props.theme.spacings[4]};
`

interface LayoutProps {
  pt?: string
  children?: React.ReactNode
}

export const Layout = ({ pt, children }: LayoutProps) => {
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
          <Container>
            <PageContentWrapper
              headerHeight="130px"
              footerHeight="120px"
              pt={pt}
            >
              {children}
            </PageContentWrapper>
          </Container>
          <Footer />
        </ThemeProvider>
      </ChakraProvider>
    </>
  )
}
