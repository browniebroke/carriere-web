const description =
  'Carrière et atelier de taille de pierre situé à Sauclières, Aveyron'
const title = 'S.A.R.L Carrière Alla'
const baseUrl = `https://www.carriere-alla.fr`

module.exports = {
  siteMetadata: {
    title: title,
    description: description,
    siteUrl: baseUrl,
    keywords: 'taille de pierre, construction, carrière, murs, piliers, voûtes',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
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
        homepage_url: baseUrl,
        start_url: '/',
        background_color: '#fff',
        theme_color: '#f7e4bc',
        display: 'standalone',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            let priority = 0.5
            if (edge.node.path === '/photos/') {
              priority = 0.7
            }
            if (edge.node.path === '/') {
              priority = 1
            }

            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `weekly`,
              priority: priority,
            }
          }),
      },
    },
    `gatsby-plugin-netlify`, // Needs to be last
  ],
}
