import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import carriereIcon from '../images/carriere-icon.svg'
import NavBav from './NavBar'
import NavItem from './NavItem'

const Header = ({ location, data }) => (
  <header>
    <div className="navbar-dark bg-primary">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center brand-font"
        >
          <img
            src={carriereIcon}
            alt=""
            style={{ width: '60px' }}
            className="img-fluid mr-3"
          />
          S.A.R.L. <br /> Carriere <br /> ALLA
        </Link>
      </div>
    </div>
    <NavBav>
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              sort: { order: ASC, fields: [frontmatter___title] }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    title
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return data.allMarkdownRemark.edges.map(({ node }) => (
            <NavItem location={location} to={node.fields.slug} key={node.id}>
              {node.frontmatter.title}
            </NavItem>
          ))
        }}
      />
    </NavBav>
  </header>
)

export default Header
