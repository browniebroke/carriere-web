import { graphql } from 'gatsby'
import React from 'react'
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

import { Layout } from '../components/layout'

interface PhotoData {
  title: string
  alt: string
  original: {
    src: string
    width: number
    height: number
  }
  thumb: IGatsbyImageData
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
  const photoswipeOptions = {
    closeTitle: 'Fermer',
    zoomTitle: 'Zoom',
    arrowPrevTitle: 'Précédente',
    arrowNextTitle: 'Suivante',
    errorMsg: "Impossible d'afficher cette image",
  }
  return (
    <Layout>
      <Heading as="h1">{album.title}</Heading>
      <Text dangerouslySetInnerHTML={{ __html: album.description }} />
      <Gallery withCaption options={photoswipeOptions}>
        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 4 }}
          spacing={3}
          marginTop={8}
        >
          {album.photos.map((photo, index) => (
            <Item
              original={photo.original.src}
              thumbnail={photo.thumb.images.fallback?.src}
              width={photo.original.width}
              height={photo.original.height}
              caption={photo.title}
              alt={photo.alt}
            >
              {({ ref, open }) => (
                <Box ref={ref} onClick={open}>
                  <GatsbyImage image={photo.thumb} alt={photo.alt} />
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
        title
        alt
        original: fluid(maxHeight: 1000, maxWidth: 2000) {
          src
          width
          height
        }
        thumb: gatsbyImageData(
          width: 270
          height: 270
          placeholder: BLURRED
          imgixParams: { fit: "crop", w: "270", h: "270" }
        )
      }
    }
  }
`

export default GalleryPage
