import { graphql } from 'gatsby'
import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Gallery from '@browniebroke/gatsby-image-gallery'

import Layout from '../components/layout'

interface PhotoData {
  full: IGatsbyImageData
  thumb: IGatsbyImageData
  caption: string
  thumbAlt: string
}

interface GalleryProps {
  data: {
    datoCmsAlbum: {
      title: string
      description: string
      photos: PhotoData[]
    }
  }
}

const GalleryPage: React.FC<GalleryProps> = ({ data }) => {
  const album = data.datoCmsAlbum
  const lightboxOptions = {
    imageLoadErrorMessage: 'Impossible de charger cette image',
    nextLabel: 'Image suivante',
    prevLabel: 'Image précédente',
    zoomInLabel: 'Zoomer',
    zoomOutLabel: 'Dézoomer',
    closeLabel: 'Fermer',
  }
  return (
    <Layout>
      <div>
        <h1>{album.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: album.description }} />
        <Gallery images={album.photos} lightboxOptions={lightboxOptions} />
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
        full: gatsbyImageData(layout: FULL_WIDTH)
        thumb: gatsbyImageData(
          width: 270
          height: 270
          placeholder: BLURRED
          imgixParams: { fit: "crop", w: "270", h: "270" }
        )
        caption: title
        thumbAlt: alt
      }
    }
  }
`

export default GalleryPage
