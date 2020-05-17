import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../scss/main.scss'
import Header from './header'
import Footer from './footer'
import SiteAlert from './site-alert'

const Layout = ({ location, children, containerClass = 'container' }) => (
  <StaticQuery
    query={graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        />
        <Header location={location} containerClass={containerClass} />
        <SiteAlert />
        <div
          className={containerClass}
          style={{ minHeight: 'calc(100vh - 130px - 120px)' }}
        >
          {children}
        </div>
        <Footer containerClass={containerClass} />
      </>
    )}
  />
)

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
  containerClass: PropTypes.string,
}

export default Layout
