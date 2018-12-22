import React from 'react'

import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'

const PhotosPage = ({ location, data }) => {
  const { md, images } = data
  // Transform data
  const galleryPage = md.edges.map(edge => {
    // Extract path of master image from page's front matter
    const masterImagePath = `${edge.node.frontmatter.images}/${
      edge.node.frontmatter.master
    }`
    // Filter master image from list of all images
    const thumbFixedImages = images.edges
      .filter(image => image.node.relativePath === masterImagePath)
      .map(image => image.node.thumb)
    // Build the page object with the master image
    return {
      id: edge.node.id,
      masterImage: thumbFixedImages[0].fixed,
      slug: edge.node.fields.slug,
      title: edge.node.frontmatter.title,
    }
  })
  return (
    <Layout location={location}>
      <h1>Photos</h1>
      <p>Voici quelques photos pour donner un aperçu de nos produits</p>
      <div className="row">
        {galleryPage.map(page => (
          <div className="col-md-3 col-sm-6" key={page.id}>
            <Link to={page.slug}>
              <img src={page.masterImage.src} alt={page.title} />
              <br />
              <span className="text-center">{page.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query GalleriesList {
    md: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/photos/" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            images
            master
            title
          }
          fields {
            slug
          }
        }
      }
    }
    images: allFile(
      filter: { relativeDirectory: { regex: "/images/photos/" } }
    ) {
      edges {
        node {
          id
          relativePath
          thumb: childImageSharp {
            fixed(width: 270, height: 270) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default PhotosPage
