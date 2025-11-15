/** @type {import('next').NextConfig} */

const description =
  'Carrière et atelier de taille de pierre situé à Sauclières, Aveyron'
const title = 'S.A.R.L Carrière Alla'

const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
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
  webpack: (config) => {
    // Find the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

module.exports = nextConfig
