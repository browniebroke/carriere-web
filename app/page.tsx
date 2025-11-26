import React from 'react'
import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { fetchDatoCMS } from '../src/utils/datocms'
import { CarouselImage, HomeCarousel } from '../src/components/home-carousel'

import HandShake from '../src/images/icons/hand-shake.svg'
import HomeBuilding from '../src/images/icons/home-building.svg'
import Shield from '../src/images/icons/shield.svg'

const SellingPoint = ({ children }: { children: React.ReactNode }) => (
  <Box
    css={{
      '& svg': {
        width: '100%',
        maxHeight: '8rem',
        margin: 'auto',
        marginBottom: 4,
        '& path': { fill: 'primary' },
      },
    }}
  >
    {children}
  </Box>
)

interface HomePageData {
  homePage: {
    carousel: CarouselImage[]
    title: string
    subtitle: string
    handshakeCopy: string
    collabCopy: string
    qualityCopy: string
  }
}

async function getHomePageData(): Promise<HomePageData> {
  try {
    const query = `
      query homePageQuery {
        homePage {
          carousel {
            url(imgixParams: {fit: crop, w: "1700", h: "980", auto: format})
            width
            height
            alt
          }
          title
          subtitle
          handshakeCopy
          collabCopy
          qualityCopy
        }
      }
    `
    return await fetchDatoCMS(query)
  } catch (error) {
    console.error('Error fetching home page data:', error)
    // Return mock data for build time
    return {
      homePage: {
        carousel: [],
        title: 'S.A.R.L Carrière Alla',
        subtitle: 'Carrière et atelier de taille de pierre',
        handshakeCopy: 'Service personnalisé',
        collabCopy: 'Collaboration étroite',
        qualityCopy: 'Qualité garantie',
      },
    }
  }
}

export default async function HomePage() {
  const data = await getHomePageData()
  const homePage = data.homePage

  return (
    <>
      <Box marginTop={0}>
        <HomeCarousel images={homePage.carousel} />
      </Box>
      <Container maxWidth="4xl">
        <Box marginY={8} justifyContent="center" textAlign="center">
          <Heading as="h1" fontSize="2.25em">
            {homePage.title}
          </Heading>
          <Text fontSize="1.5em">{homePage.subtitle}</Text>
        </Box>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          textAlign="center"
          gap={4}
          marginBottom={10}
        >
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
      </Container>
    </>
  )
}
