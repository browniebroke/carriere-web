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
                ref={ref}
                onClick={open}
                position="relative"
                width="100%"
                paddingBottom="100%"
                cursor="pointer"
                overflow="hidden"
              >
                <Box position="absolute" top={0} left={0} right={0} bottom={0}>
                  <Image
                    src={photo.thumbUrl}
                    alt={photo.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="270px"
                  />
                </Box>
              </Box>
            )}
          </Item>
        ))}
      </SimpleGrid>
    </Gallery>
  )
}
