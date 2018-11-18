module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
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
        name: 'S.A.R.L Alla',
        short_name: 'S.A.R.L Alla',
        description: 'Site du restaurant Chez Nicole',
        homepage_url: 'https://www.chez-nicole.fr',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#f7e4bc',
        display: 'minimal-ui',
        icon: 'static/img/icon.png',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
  ],
}
