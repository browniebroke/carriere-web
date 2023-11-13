const description =
  'Carrière et atelier de taille de pierre situé à Sauclières, Aveyron'
const title = 'S.A.R.L Carrière Alla'
const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : process.env.REVIEW_ID
      ? `https://deploy-preview-${process.env.REVIEW_ID}--carriere-alla.netlify.app`
      : `https://www.carriere-alla.fr`
const gaTrackingId =
  process.env.PRODUCTION_DEPLOY === 'true' ? 'G-7XHZBQDB2E' : 'G-xxx'

module.exports = {
  siteMetadata: {
    title: title,
    description: description,
    siteUrl: baseUrl,
    keywords: 'taille de pierre, construction, carrière, murs, piliers, voûtes',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // It's under the Settings > API tokens
        apiToken: `5c9510728aa44244b58d9c5fe89f7b`,
        // Preview the latest version of records instead of the published one:
        previewMode: false,
        // Automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: 'Carrière Alla',
        description: description,
        start_url: '/',
        background_color: '#fff',
        theme_color: '#f7e4bc',
        display: 'standalone',
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          gaTrackingId, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sentry`,
      options: {
        dsn: 'https://7b2edbed4f49486685ed4d9cdce45b0a@sentry.io/1368012',
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
        isBaseProvider: false,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/',
        resolveSiteUrl: () => baseUrl,
        serialize: (page, tools) => {
          let priority = 0.5
          const pagePath = tools.resolvePagePath(page)
          if (pagePath.includes('/photos/')) {
            priority = 0.7
          }
          if (pagePath === '/') {
            priority = 1
          }
          return {
            url: `${baseUrl}${pagePath}`,
            changefreq: `monthly`,
            priority: priority,
          }
        },
      },
    },
    {
      // Needs to be last
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            // Opt-out of Google's FLoC
            'Permissions-Policy: interest-cohort=()',
          ],
        },
      },
    },
  ],
}
