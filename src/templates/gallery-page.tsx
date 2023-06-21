import { graphql } from 'gatsby'
import React from 'react'
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

import { Layout } from '../components/layout'

interface PhotoData {
  original: {
    src: string
  }
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

const GalleryPage = ({ data }: GalleryProps) => {
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
      <Heading as="h1">{album.title}</Heading>
      <Text dangerouslySetInnerHTML={{ __html: album.description }} />
      <Gallery>
        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 4 }}
          spacing={3}
          marginTop={8}
        >
          {album.photos.map((photo, index) => (
            <Item
              original={photo.original.src}
              thumbnail={photo.thumb.images.fallback?.src}
            >
              {({ ref, open }) => (
                <Box ref={ref} onClick={open}>
                  <GatsbyImage image={photo.thumb} alt={photo.thumbAlt} />
                </Box>
              )}
            </Item>
          ))}
        </SimpleGrid>
      </Gallery>
    </Layout>
  )
}

export const galleryPageQuery = graphql`
  query GalleryData($albumId: String!) {
    datoCmsAlbum(id: { eq: $albumId }) {
      title
      description
      photos {
        original: fixed(width: 1024) {
          src
        }
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
