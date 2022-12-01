import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { Col, Row } from '@browniebroke/react-ui-components'

import { Layout } from '../components/layout'
// @ts-ignore
import { makeAlbumUrlPath } from '../utils/routes'

const GalleryLinkWrapper = styled.div`
  display: flex;
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

interface ProductPageEdge {
  node: {
    id: string
    title: string
    description: string
    mainPicture: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

interface ProductListPageProps {
  data: {
    allDatoCmsAlbum: {
      edges: ProductPageEdge[]
    }
  }
}

const ProductsListPage = ({ data }: ProductListPageProps) => {
  const albumNodesList = data.allDatoCmsAlbum.edges
  return (
    <Layout>
      <div>
        <h1>Produits</h1>
        <p>
          Voici un aperçu de nos produits. Cliquez sur une catégorie pour en
          savoir plus.
        </p>
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
                  <GatsbyImage
                    image={node.mainPicture.gatsbyImageData}
                    alt={node.title}
                  />
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
    allDatoCmsAlbum(sort: { title: ASC }) {
      edges {
        node {
          id
          title
          description
          mainPicture {
            gatsbyImageData(
              width: 270
              placeholder: BLURRED
              imgixParams: { fit: "crop", w: "270", h: "270" }
            )
          }
        }
      }
    }
  }
`

export default ProductsListPage
