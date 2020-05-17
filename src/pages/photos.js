import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { makeAlbumUrlPath } from '../utils/routes'

import './photos.scss'

const PhotosPage = ({ location, data }) => {
  const albumNodesList = data.allDatoCmsAlbum.edges
  return (
    <Layout location={location}>
      <div className="my-4">
        <h1>Photos</h1>
        <p>Voici quelques photos pour donner un aperçu de nos produits</p>
        <div className="row">
          {albumNodesList.map(({ node }) => (
            <div className="col-6 col-sm-4 col-md-3 px-1 py-1" key={node.id}>
              <Link to={makeAlbumUrlPath(node.title)}>
                <div className="gallery-link-wrapper">
                  <Img fluid={node.mainPicture.fluid} alt={node.title} />
                  <span className="gallery-label">{node.title}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query GalleriesList {
    allDatoCmsAlbum(sort: { order: ASC, fields: title }) {
      edges {
        node {
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
