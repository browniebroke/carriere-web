'use client'

import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

interface PhotoData {
  title: string
  alt: string
  url: string
  width: number
  height: number
  thumbUrl: string
}

interface GalleryClientProps {
  photos: PhotoData[]
}

export function GalleryClient({ photos }: GalleryClientProps) {
  const photoswipeOptions = {
    closeTitle: 'Fermer',
    zoomTitle: 'Zoom',
    arrowPrevTitle: 'Précédente',
    arrowNextTitle: 'Suivante',
    errorMsg: "Impossible d'afficher cette image",
  }

  return (
    <Gallery withCaption options={photoswipeOptions}>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={3} marginTop={8}>
        {photos.map((photo, index) => (
          <Item
            key={index}
            original={photo.url}
            thumbnail={photo.thumbUrl}
            width={photo.width}
            height={photo.height}
            caption={photo.title}
            alt={photo.alt}
          >
            {({ ref, open }) => (
              <Box
                ref={ref as any}
                onClick={open}
                position="relative"
                width="100%"
                height="270px"
                cursor="pointer"
              >
                <Image
                  src={photo.thumbUrl}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="270px"
                />
              </Box>
            )}
          </Item>
        ))}
      </SimpleGrid>
    </Gallery>
  )
}
