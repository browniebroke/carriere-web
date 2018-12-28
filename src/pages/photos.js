import React from 'react'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import './photos.scss'

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
      masterImage: thumbFixedImages[0].fluid,
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
          <div className="col-md-3 col-sm-6 px-1 py-1" key={page.id}>
            <Link to={page.slug}>
              <div className="gallery-link-wrapper">
                <Img fluid={page.masterImage} alt={page.title} />
                <span className="gallery-label">{page.title}</span>
              </div>
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
            fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default PhotosPage
