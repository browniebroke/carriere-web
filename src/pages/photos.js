import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { Col, Row } from '@browniebroke/react-ui-components'

import Layout from '../components/layout'
import { makeAlbumUrlPath } from '../utils/routes'

const GalleryLinkWrapper = styled.div`
  position: relative;

  &:hover {
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.2s;

    img {
      filter: brightness(50%);
    }
  }
`

const GalleryLabel = styled.span`
  font-weight: 900;
  font-size: 1.2em;
  color: white;
  position: absolute;
  z-index: 5;
  bottom: 0.5rem;
  left: 0.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
`

const PhotosPage = ({ location, data }) => {
  const albumNodesList = data.allDatoCmsAlbum.edges
  return (
    <Layout location={location}>
      <div>
        <h1>Photos</h1>
        <p>Voici quelques photos pour donner un aperçu de nos produits</p>
        <Row>
          {albumNodesList.map(({ node }) => (
            <Col
              width="50%"
              smMaxWidth={`${100 / 3}%`}
              mdMaxWidth="25%"
              sidePadding={1}
              key={node.id}
            >
              <Link to={makeAlbumUrlPath(node.title)}>
                <GalleryLinkWrapper>
                  <Img fluid={node.mainPicture.fluid} alt={node.title} />
                  <GalleryLabel>{node.title}</GalleryLabel>
                </GalleryLinkWrapper>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </Layout>
  )
}

export const photosPageQuery = graphql`
  query GalleriesList {
    allDatoCmsAlbum(sort: { order: ASC, fields: title }) {
      edges {
        node {
          id
          title
          description
          mainPicture {
            fluid(
              maxWidth: 270
              imgixParams: { fit: "crop", w: "270", h: "270" }
            ) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`

export default PhotosPage
