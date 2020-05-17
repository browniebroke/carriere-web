/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

const { makeAlbumUrlPath } = require(`./src/utils/routes`)

// Create a page for each markdown file for photos
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Run query
  const result = await graphql(`
    {
      allDatoCmsAlbum {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)

  // In case of errors, stop here
  if (result.errors) {
    reporter.panicOnBuild(`Error creating pages`, reporter.errors)
    return
  }

  // Otherwise, process result & create pages
  result.data.allDatoCmsAlbum.edges.forEach(({ node }) => {
    const urlPath = makeAlbumUrlPath(node.title)
    actions.createPage({
      path: urlPath,
      component: path.resolve(`./src/templates/gallery-page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        albumId: node.id,
      },
    })
  })
}
