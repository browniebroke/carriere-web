import { graphql } from 'gatsby'
import React from 'react'

const GalleryPage = () => <div>Gallery here</div>

// Assumes that $path == 'images/angles' for instance
// Next is to create page dynamically
// https://www.gatsbyjs.org/tutorial/part-seven/
// Can work on regex as well relativeDirectory: { eq: "/angles/" }
export const pageQuery = graphql`
  query ImagesForCurrentGallery($path: String!) {
    allFile(filter: { relativeDirectory: { eq: $path } }) {
      edges {
        node {
          id
          relativePath
          base
        }
      }
    }
  }
`

export default GalleryPage
