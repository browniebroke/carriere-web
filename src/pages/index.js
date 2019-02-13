import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import HandShake from '../images/icons/hand-shake.svg'
import HomeBuilding from '../images/icons/home-building.svg'
import Shield from '../images/icons/shield.svg'
import Slider from '../components/Slider'

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <div className="row">
      <Slider
        autoplay={true}
        renderCenterLeftControls={() => false}
        renderCenterRightControls={() => false}
        wrapAround={true}
      >
        {data.carrouselImages.edges.map((edge, id) => (
          <Img fluid={edge.node.image.fluid} key={id} />
        ))}
      </Slider>
    </div>
    <div className="pt-5">
      <div className="row justify-content-center">
        <div className="col-md-10 text-center">
          <h1>
            Toute la pierre de construction <br />
          </h1>
          <p className="lead">
            <em>Carrière et atelier de taille de pierre</em>
          </p>
        </div>
      </div>
    </div>
    <div className="py-5">
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
    carrouselImages: allFile(
      filter: {
        relativePath: {
          in: [
            "images/photos/voutes/image-002.jpg"
            "images/photos/murs/image-022.jpg"
            "images/photos/encadrements/image-001.jpg"
            "images/photos/bassins/image-001.jpg"
          ]
        }
      }
    ) {
      edges {
        node {
          image: childImageSharp {
            fluid(
              maxWidth: 1700
              maxHeight: 980
              srcSetBreakpoints: [576, 768, 992, 1200]
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
