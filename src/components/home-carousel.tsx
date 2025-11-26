'use client'

import React from 'react'
import { Box } from '@chakra-ui/react'
import { Carousel } from 'nuka-carousel'
import Image from 'next/image'

export interface CarouselImage {
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
      autoplay
      autoplayInterval={3000}
      wrapMode="wrap"
      showArrows
      showDots
    >
      {images.map((carouselImage, id) => (
        <Box key={id} width="100%" height="600px">
          <Image
            key={id}
            src={carouselImage.url}
            alt={carouselImage.alt || ''}
            fill
            sizes="(max-width: 1700px) 100vw, 1700px"
            priority={id === 0}
          />
        </Box>
      ))}
    </Carousel>
  )
}
