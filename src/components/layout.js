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

const Layout = ({ location, children }) => {
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
          <ContentWrapper headerHeight="130px" footerHeight="120px">
            {children}
          </ContentWrapper>
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
