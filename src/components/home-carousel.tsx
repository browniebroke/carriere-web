'use client'

import React from 'react'
import { Box } from '@chakra-ui/react'
import { Carousel } from 'nuka-carousel'
import Image from 'next/image'

interface CarouselImage {
  url: string
  width: number
  height: number
  alt: string
}

interface HomeCarouselProps {
  images: CarouselImage[]
}

export function HomeCarousel({ images }: HomeCarouselProps) {
  if (!images || images.length === 0) {
    return null
  }

  return (
    <Carousel
      autoplay={true}
      wrapMode="wrap"
      showArrows={false}
      showDots={false}
    >
      {images.map((carouselImage, id) => (
        <Box key={id} position="relative" width="100%" height="500px">
          <Image
            src={carouselImage.url}
            alt={carouselImage.alt || ''}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 1700px) 100vw, 1700px"
            priority={id === 0}
          />
        </Box>
      ))}
    </Carousel>
  )
}
