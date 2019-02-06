import React, { Component } from 'react'
import Carousel from 'nuka-carousel'

/**
 * Higher order component to set the height properly
 * https://github.com/FormidableLabs/nuka-carousel/issues/103#issuecomment-246177101
 */
class Slider extends Component {
  constructor(props) {
    super(props)
    // Save a reference to the carousel component to
    // be able to reference it in lifecycle methods
    this.carousel = null
    this.setCarouselRef = element => {
      this.carousel = element
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.carousel.setDimensions()
    }, 0)
  }

  render() {
    // Use a callback pattern rather then string ref from the Github issue:
    // https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs
    // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
    return <Carousel ref={this.setCarouselRef} {...this.props} />
  }
}

export default Slider
