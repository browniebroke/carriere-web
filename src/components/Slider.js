import React, { Component } from 'react'
import Carousel from 'nuka-carousel'

/**
 * Higher order component to set the height properly
 * https://github.com/FormidableLabs/nuka-carousel/issues/103#issuecomment-246177101
 */
class Slider extends Component {
  constructor(props) {
    super(props)
    this.carousel = React.createRef()
  }

  componentDidMount() {
    setTimeout(() => {
      this.carousel.setDimensions()
    }, 0)
  }

  render() {
    return <Carousel ref={this.carousel} {...this.props} />
  }
}

export default Slider
