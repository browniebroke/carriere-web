import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Gallery from '@browniebroke/gatsby-image-gallery'

const GalleryPage = ({ data }) => {
  const post = data.post
  const images = data.images.edges
  const fullSize = images.map(imageNode => imageNode.node.full.fluid.src)
  const thumbs = images.map(imageNode => imageNode.node.thumb.fluid)
  console.log(fullSize)
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Gallery images={fullSize} thumbs={thumbs} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query GalleryData($imagePath: String!, $slug: String!) {
    images: allFile(filter: { relativeDirectory: { eq: $imagePath } }) {
      edges {
        node {
          id
          relativeDirectory
          thumb: childImageSharp {
            fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
          }
          full: childImageSharp {
            fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default GalleryPage
