import { graphql } from 'gatsby'
import React from 'react'
import Gallery from '@browniebroke/gatsby-image-gallery'

import Layout from '../components/layout'

import '@browniebroke/gatsby-image-gallery/dist/style.css'

const GalleryPage = ({ data }) => {
  const album = data.datoCmsAlbum
  return (
    <Layout>
      <div className="my-4">
        <h1>{album.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: album.description }} />
        <Gallery images={album.photos} />
      </div>
    </Layout>
  )
}

export const galleryPageQuery = graphql`
  query GalleryData($albumId: String!) {
    datoCmsAlbum(id: { eq: $albumId }) {
      title
      description
      photos {
        full: fluid(maxWidth: 1024) {
          ...GatsbyDatoCmsFluid
        }
        thumb: fluid(
          maxWidth: 270
          imgixParams: { fit: "crop", w: "270", h: "270" }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default GalleryPage
