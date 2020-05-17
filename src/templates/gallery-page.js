import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

const GalleryPage = ({ data }) => {
  const album = data.datoCmsAlbum
  const fullSize = album.photos.map((photo) => photo.full.src)
  const thumbs = album.photos.map((photo) => photo.thumb)
  return (
    <Layout>
      <div className="my-4">
        <h1>{album.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: album.description }} />
        <Gallery images={fullSize} thumbs={thumbs} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query GalleryData($albumId: String!) {
    datoCmsAlbum(id: { eq: $albumId }) {
      title
      description
      photos {
        full: fluid(maxWidth: 1024) {
          ...GatsbyDatoCmsFluid
        }
        thumb: fluid(maxWidth: 270, maxHeight: 270) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default GalleryPage
