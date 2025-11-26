/** @type {import('next').NextConfig} */

const description =
  'Carrière et atelier de taille de pierre situé à Sauclières, Aveyron'
const title = 'S.A.R.L Carrière Alla'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
      },
    ],
  },
  env: {
    SITE_TITLE: title,
    SITE_DESCRIPTION: description,
    SITE_KEYWORDS:
      'taille de pierre, construction, carrière, murs, piliers, voûtes',
    DATOCMS_API_TOKEN:
      process.env.DATOCMS_API_TOKEN || '5c9510728aa44244b58d9c5fe89f7b',
    GA_TRACKING_ID:
      process.env.PRODUCTION_DEPLOY === 'true' ? 'G-7XHZBQDB2E' : 'G-xxx',
    SENTRY_DSN: 'https://7b2edbed4f49486685ed4d9cdce45b0a@sentry.io/1368012',
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
}

module.exports = nextConfig
