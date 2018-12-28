import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../scss/main.scss'
import Header from './header'

const Layout = ({ location, children, containerClass = 'container-fluid' }) => (
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
    render={data => (
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
        <div className={containerClass}>{children}</div>
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
