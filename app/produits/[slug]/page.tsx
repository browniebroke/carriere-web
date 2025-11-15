import React from 'react'
import { Container, Heading, Text } from '@chakra-ui/react'
import { fetchDatoCMS } from '../../../src/utils/datocms'
import { GalleryClient } from '../../../src/components/gallery-client'
import slugify from 'slugify'

interface PhotoData {
  title: string
  alt: string
  url: string
  width: number
  height: number
  thumbUrl: string
}

interface Album {
  title: string
  description: string
  photos: PhotoData[]
}

interface GalleryPageData {
  album: Album
}

async function getAlbumData(slug: string): Promise<GalleryPageData | null> {
  try {
    // First get all albums to match slug to ID
    const allAlbumsQuery = `
      query {
        allAlbums {
          id
          title
        }
      }
    `
    const allAlbumsData: {
      allAlbums: Array<{ id: string; title: string }>
    } = await fetchDatoCMS(allAlbumsQuery)

    const album = allAlbumsData.allAlbums.find(
      (a) =>
        slugify(a.title, { lower: true, remove: /[*+~.()'"!:@]/g }) === slug
    )

    if (!album) {
      return null
    }

    const query = `
      query GalleryData($albumId: ItemId!) {
        album(filter: {id: {eq: $albumId}}) {
          title
          description
          photos {
            title
            alt
            url(imgixParams: {maxH: 1000, maxW: 2000, auto: format})
            width
            height
            thumbUrl: url(imgixParams: {fit: crop, w: "270", h: "270", auto: format})
          }
        }
      }
    `
    return await fetchDatoCMS(query, { albumId: album.id })
  } catch (error) {
    console.error('Error fetching album data:', error)
    return null
  }
}

export async function generateStaticParams() {
  try {
    const query = `
      query {
        allAlbums {
          title
        }
      }
    `
    const data: { allAlbums: Array<{ title: string }> } =
      await fetchDatoCMS(query)

    return data.allAlbums.map((album) => ({
      slug: slugify(album.title, { lower: true, remove: /[*+~.()'"!:@]/g }),
    }))
  } catch (error) {
    console.warn(
      'Could not fetch albums for static generation, using mock data'
    )
    // Use mock data for build time
    const { mockAlbums } = await import('../../../src/utils/mock-albums')
    return mockAlbums.map((title) => ({
      slug: slugify(title, { lower: true, remove: /[*+~.()'"!:@]/g }),
    }))
  }
}

export const dynamic = 'error'
export const dynamicParams = true

export default async function GalleryPage({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getAlbumData(params.slug)

  if (!data) {
    return <div>Album not found</div>
  }

  const album = data.album

  return (
    <Container maxWidth="4xl" marginTop={10} marginBottom={10} minHeight="80vh">
      <Heading as="h1">{album.title}</Heading>
      <Text dangerouslySetInnerHTML={{ __html: album.description }} />
      <GalleryClient photos={album.photos} />
    </Container>
  )
}
