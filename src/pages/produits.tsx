import React from 'react'
import { graphql, Link } from 'gatsby'
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { Layout } from '../components/layout'
// @ts-ignore
import { makeAlbumUrlPath } from '../utils/routes'

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
      <Box>
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
          {albumNodesList.map(({ node }) => (
            <Link to={makeAlbumUrlPath(node.title)}>
              <GalleryLinkWrapper>
                <GatsbyImage
                  image={node.mainPicture.gatsbyImageData}
                  alt={node.title}
                />
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
