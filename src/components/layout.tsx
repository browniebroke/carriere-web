import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import {
  Container,
  ContentWrapper,
  GlobalStyles,
} from '@browniebroke/react-ui-components'
import { Theme } from '@browniebroke/react-ui-components/src/types'

import Header from './header'
import Footer from './footer'
import SiteAlert from './site-alert'
import theme from '../theme'
import styled from 'styled-components'

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
}

const Layout: React.FC<LayoutProps> = ({ pt, children }) => {
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
          <PageContentWrapper headerHeight="130px" footerHeight="120px" pt={pt}>
            {children}
          </PageContentWrapper>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
