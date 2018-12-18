import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'

const GalleryPage = ({ data }) => {
  const post = data.post
  const images = data.images.edges
  const fullSize = images.map(imageNode => imageNode.node.full.fluid.src)
  const thumbs = images.map(imageNode => imageNode.node.thumb.fixed.src)
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
            fixed(width: 270, height: 270) {
              ...GatsbyImageSharpFixed
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
