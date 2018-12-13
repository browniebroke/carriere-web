const description = 'Site de la carrière de pierre de Sauclières'
const title = 'S.A.R.L Alla'

module.exports = {
  siteMetadata: {
    title: title,
    description: description,
    keywords: 'taille de pierre, construction, carrière, murs, piliers, voûtes',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: title,
        description: description,
        homepage_url: 'https://www.carriere-alla.fr',
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
