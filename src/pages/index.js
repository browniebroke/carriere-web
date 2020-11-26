import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Slider from '../components/slider'
import HandShake from '../images/icons/hand-shake.svg'
import HomeBuilding from '../images/icons/home-building.svg'
import Shield from '../images/icons/shield.svg'
import Row from '../components/row'
import Col from '../components/column'

const IndexPage = ({ location, data }) => {
  const homePage = data.datoCmsHomePage
  return (
    <Layout location={location} pt={0}>
      <Row>
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
      </Row>
      <Row topPadding={5} justifyContent="center">
        <Col textAlign="center">
          <h1>
            {homePage.title} <br />
          </h1>
          <p style={{ fontSize: '1.5em' }}>
            <em>{homePage.subtitle}</em>
          </p>
        </Col>
      </Row>
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
