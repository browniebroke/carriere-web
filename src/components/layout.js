import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { Container, ContentWrapper } from '@browniebroke/react-ui-components'

import '../scss/main.scss'
import Header from './header'
import Footer from './footer'
import SiteAlert from './site-alert'
import theme from '../theme'
import styled from 'styled-components'

// TODO: find a better solution
const PageContentWrapper = styled(ContentWrapper)`
  padding-top: ${(props) =>
    props.pt !== undefined ? props.pt : props.theme.spacings[4]};
  padding-bottom: ${(props) => props.theme.spacings[4]};
`

const Layout = ({ pt, location, children }) => {
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
        <Header location={location} />
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

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
}

export default Layout
