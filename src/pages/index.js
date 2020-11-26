import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import HandShake from '../images/icons/hand-shake.svg'
import HomeBuilding from '../images/icons/home-building.svg'
import Shield from '../images/icons/shield.svg'
import Slider from '../components/slider'

const IndexPage = ({ location, data }) => {
  const homePage = data.datoCmsHomePage
  return (
    <Layout location={location} pt={0}>
      <div className="row">
        <Slider
          autoplay={true}
          renderCenterLeftControls={() => false}
          renderCenterRightControls={() => false}
          wrapAround={true}
        >
          {homePage.carousel.map((image, id) => (
            <Img fluid={image.fluid} key={id} />
          ))}
        </Slider>
      </div>
      <div className="pt-5">
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            <h1>
              {homePage.title} <br />
            </h1>
            <p className="lead">
              <em>{homePage.subtitle}</em>
            </p>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="row">
          <div className="col-md-4">
            <HandShake className="selling-point mb-4" />
            <p className="text-center">{homePage.handshakeCopy}</p>
          </div>
          <div className="col-md-4">
            <Shield className="selling-point mb-4" />
            <p className="text-center">{homePage.qualityCopy}</p>
          </div>
          <div className="col-md-4">
            <HomeBuilding className="selling-point mb-4" />
            <p className="text-center">{homePage.collabCopy}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const indexPageQuery = graphql`
  query homePageQuery {
    datoCmsHomePage {
      carousel {
        fluid(
          maxWidth: 1700
          imgixParams: { fit: "crop", w: "1700", h: "980" }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
      title
      subtitle
      handshakeCopy
      collabCopy
      qualityCopy
    }
  }
`
