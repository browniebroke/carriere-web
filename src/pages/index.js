import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Row from '../components/row'
import Col from '../components/column'
import Layout from '../components/layout'
import Slider from '../components/slider'
import HandShake from '../images/icons/hand-shake.svg'
import HomeBuilding from '../images/icons/home-building.svg'
import Shield from '../images/icons/shield.svg'

const getLogoStyles = (props) => `
  margin: auto;
  width: 100%;
  max-height: 8rem;
  margin-bottom: ${props.theme.spacings[3]};
  
  path {
    fill: ${props.theme.colors.primary};
  }
  `

const StyledHandShake = styled(HandShake)`
  ${getLogoStyles}
`
const StyledShield = styled(Shield)`
  ${getLogoStyles}
`
const StyledHomeBuilding = styled(HomeBuilding)`
  ${getLogoStyles}
`

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
      <Row yPadding={5} justifyContent="center">
        <Col textAlign="center">
          <h1>
            {homePage.title} <br />
          </h1>
          <p style={{ fontSize: '1.5em' }}>
            <em>{homePage.subtitle}</em>
          </p>
        </Col>
      </Row>
      <Row>
        <Col textAlign="center" mdMaxWidth={`${100 / 3}%`}>
          <StyledHandShake />
          <p>{homePage.handshakeCopy}</p>
        </Col>
        <Col textAlign="center" mdMaxWidth={`${100 / 3}%`}>
          <StyledShield />
          <p>{homePage.qualityCopy}</p>
        </Col>
        <Col textAlign="center" mdMaxWidth={`${100 / 3}%`}>
          <StyledHomeBuilding />
          <p>{homePage.collabCopy}</p>
        </Col>
      </Row>
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
