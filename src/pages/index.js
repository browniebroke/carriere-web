import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <Img
      fluid={data.file.childImageSharp.fluid}
      style={{ marginRight: '-15px', marginLeft: '-15px' }}
    />
    <p>Bienvenue sur notre site.</p>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "images/carriere-overview.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
