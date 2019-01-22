import React, { Component } from 'react'
import Carousel from 'nuka-carousel'

/**
 * Higher order component to set the height properly
 * https://github.com/FormidableLabs/nuka-carousel/issues/103#issuecomment-246177101
 */
class Slider extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.refs.carousel.setDimensions()
    }, 0)
  }

  render() {
    return <Carousel ref="carousel" {...this.props} />
  }
}

export default Slider
