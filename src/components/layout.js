import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../scss/main.scss'
import Header from './header'
import Footer from './footer'

function renderAlert() {
  const startDate = new Date('2019/08/14')
  const endDate = new Date('2019/08/26')
  const today = new Date()
  if (startDate < today && today < endDate) {
    return (
      <div className="alert alert-info mb-0">
        <div className="lead text-center p-2">
          📢️ Nous sommes à présent en congés annuels et sommes fermés jusqu'au
          lundi 26 août. 📢️
        </div>
      </div>
    )
  }
}

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
        {renderAlert()}
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
