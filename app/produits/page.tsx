import React from 'react'
import Link from 'next/link'
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import { fetchDatoCMS } from '../../src/utils/datocms'
import { makeAlbumUrlPath } from '../../src/utils/routes'

const GalleryLinkWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Flex
    position="relative"
    sx={{
      '&:hover': {
        boxShadow: '1px 1px 6px rgba(0, 0, 0, 0.5)',
        transition: 'box-shadow 0.2s',
        img: {
          filter: 'brightness(50%)',
        },
      },
    }}
  >
    {children}
  </Flex>
)

interface Album {
  id: string
  title: string
  description: string
  mainPicture: {
    url: string
    width: number
    height: number
  }
}

interface ProductListPageData {
  allAlbums: Album[]
}

async function getProductsData(): Promise<ProductListPageData> {
  try {
    const query = `
      query GalleriesList {
        allAlbums(orderBy: title_ASC) {
          id
          title
          description
          mainPicture {
            url(imgixParams: {fit: crop, w: "270", h: "270", auto: format})
            width
            height
          }
        }
      }
    `
    return await fetchDatoCMS(query)
  } catch (error) {
    console.error('Error fetching products data:', error)
    return {
      allAlbums: [],
    }
  }
}

export default async function ProductsListPage() {
  const data = await getProductsData()
  const albumNodesList = data.allAlbums

  return (
    <Container maxWidth="4xl">
      <Box marginTop={10} marginBottom={10} minHeight="80vh">
        <Heading as="h1">Produits</Heading>
        <Text>
          Voici un aperçu de nos produits. Cliquez sur une catégorie pour en
          savoir plus.
        </Text>
        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 4 }}
          spacing={3}
          marginTop={8}
        >
          {albumNodesList.map((node) => (
            <Link key={node.id} href={makeAlbumUrlPath(node.title)}>
              <GalleryLinkWrapper>
                <Box position="relative" width="100%" height="270px">
                  <Image
                    src={node.mainPicture.url}
                    alt={node.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="270px"
                  />
                </Box>
                <Text
                  as="span"
                  marginBottom={0}
                  fontWeight="bold"
                  color="white"
                  position="absolute"
                  zIndex="5"
                  bottom={2}
                  left={2}
                  textShadow="1px 1px 3px rgba(0, 0, 0, 0.8)"
                >
                  {node.title}
                </Text>
              </GalleryLinkWrapper>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  )
}
