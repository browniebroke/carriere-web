'use client'

import React from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '../src/components/header'
import { Footer } from '../src/components/footer'
import { theme as chakraTheme } from '../src/utils/theme'
import '@fontsource/montserrat'
import '@fontsource/montserrat/400-italic.css'
import '@fontsource/montserrat/600.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaTrackingId = process.env.GA_TRACKING_ID || ''

  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#f7e4bc" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <title>S.A.R.L Carrière Alla</title>
        <meta
          name="description"
          content="Carrière et atelier de taille de pierre situé à Sauclières, Aveyron"
        />
        <meta
          name="keywords"
          content="taille de pierre, construction, carrière, murs, piliers, voûtes"
        />
      </head>
      <body>
        <ChakraProvider theme={chakraTheme}>
          <Header />
          {children}
          <Footer />
        </ChakraProvider>
        {gaTrackingId && gaTrackingId !== 'G-xxx' && (
          <GoogleAnalytics gaId={gaTrackingId} />
        )}
      </body>
    </html>
  )
}
