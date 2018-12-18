import React from 'react'

import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'

const PhotosPage = ({ location, data }) => {
  const { md, images } = data
  // Transform data
  const galleryPage = md.edges.map(edge => {
    const masterImagePath = `${edge.node.frontmatter.images}/${
      edge.node.frontmatter.master
    }`
    console.log(images)
    const thumbFixedImages = images.edges
      .filter(image => image.node.relativePath === masterImagePath)
      .map(image => image.node.thumb)
    return {
      id: edge.node.id,
      masterImage: thumbFixedImages[0],
      slug: edge.node.fields.slug,
      title: edge.node.frontmatter.title,
    }
  })
  return (
    <Layout location={location}>
      <h1>Photos</h1>
      <p>Voici quelques photos pour donner un aperçu de nos produits</p>
      <ul>
        {galleryPage.map(page => (
          <li key={page.id}>
            <Link to={page.slug}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query GalleriesList {
    md: allMarkdownRemark(filter: { fields: { slug: { regex: "/photos/" } } }) {
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
