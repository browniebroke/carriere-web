/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

// Add the slug field to MarkdownRemark objects
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// Create a page for each markdown file for photos
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Run query
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              images
              master
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // In case of errors, stop here
  if (result.errors) {
    reporter.panic(`Error creating pages`, reporter.errors)
  }

  // Otherwise, process result & create pages
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.fields.slug.startsWith('/photos/')) {
      actions.createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/gallery-page.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          imagePath: node.frontmatter.images,
          masterImage: node.frontmatter.master,
        },
      })
    }
  })
}
