import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Carousel from 'nuka-carousel'

import { Layout } from '../components/layout'

import HandShake from '../images/icons/hand-shake.svg'
import HomeBuilding from '../images/icons/home-building.svg'
import Shield from '../images/icons/shield.svg'

const SellingPoint = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      svg: {
        width: '100%',
        maxHeight: '8rem',
        margin: 'auto',
        marginBottom: 4,
      },
      path: { fill: 'primary' },
    }}
  >
    {children}
  </Box>
)

interface CarouselImage {
  image: IGatsbyImageData
}

interface IndexPageProps {
  data: {
    datoCmsHomePage: {
      carousel: CarouselImage[]
      title: string
      subtitle: string
      handshakeCopy: string
      collabCopy: string
      qualityCopy: string
    }
  }
}

const IndexPage = ({ data }: IndexPageProps) => {
  const homePage = data.datoCmsHomePage
  return (
    <Layout marginTop={0}>
      <Carousel
        autoplay={true}
        renderCenterLeftControls={() => false}
        renderCenterRightControls={() => false}
        wrapAround={true}
      >
        {homePage.carousel.map((carouselImage, id) => (
          <GatsbyImage image={carouselImage.image} key={id} alt="" />
        ))}
      </Carousel>
      <Box marginY={8} justifyContent="center" textAlign="center">
        <Heading as="h1">{homePage.title}</Heading>
        <Text fontSize="1.5em">{homePage.subtitle}</Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} textAlign="center" spacing={4}>
        <SellingPoint>
          <HandShake />
          <Text>{homePage.handshakeCopy}</Text>
        </SellingPoint>
        <SellingPoint>
          <Shield />
          <Text>{homePage.qualityCopy}</Text>
        </SellingPoint>
        <SellingPoint>
          <HomeBuilding />
          <Text>{homePage.collabCopy}</Text>
        </SellingPoint>
      </SimpleGrid>
    </Layout>
  )
}

export default IndexPage

export const indexPageQuery = graphql`
  query homePageQuery {
    datoCmsHomePage {
      carousel {
        image: gatsbyImageData(
          width: 1700
          placeholder: BLURRED
          imgixParams: { fit: "crop", w: "1700", h: "980" }
        )
      }
      title
      subtitle
      handshakeCopy
      collabCopy
      qualityCopy
    }
  }
`
