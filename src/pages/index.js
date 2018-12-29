import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import HandShake from '../images/icons/hand-shake.svg'
import HomeBuilding from '../images/icons/home-building.svg'
import Shield from '../images/icons/shield.svg'

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
    <div className="my-5">
      <div className="row">
        <div className="col-md-4">
          <HandShake className="selling-point" />
        </div>
        <div className="col-md-4">
          <Shield className="selling-point" />
        </div>
        <div className="col-md-4">
          <HomeBuilding className="selling-point" />
        </div>
      </div>
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
