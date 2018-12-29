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
          <HandShake className="selling-point mb-4" />
          <p className="text-center">
            Notre équipe de confiance est là pour vous aider à réaliser vos
            projets et nous travaillons main dans la main pour vous fournir ce
            que vous recherchez.
          </p>
        </div>
        <div className="col-md-4">
          <Shield className="selling-point mb-4" />
          <p className="text-center">
            Notre travail est réalisé de façon artisanale dans les meilleures
            conditions possibles pour assurer une qualité maximale de nos
            produits.
          </p>
        </div>
        <div className="col-md-4">
          <HomeBuilding className="selling-point mb-4" />
          <p className="text-center">
            Nous travaillons avec particuliers, bâtisseurs, our collectivités
            locales pour tous types de constructions, sur mesures en intérieurs
            ou grand en extérieurs.
          </p>
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
