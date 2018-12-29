import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <div className="hero-image-wrapper">
      <Img fluid={data.file.childImageSharp.fluid} className="img-hero" />
      <h2 className="headline text-center">
        Toute la pierre de construction
        <br />
        <span className="small">Carrière et taille de pierre</span>
      </h2>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "images/carriere-overview.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
