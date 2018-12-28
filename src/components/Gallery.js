import React, { Component } from 'react'
import Img from 'gatsby-image'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const prevIndex = state => (state.index - 1) % state.images.length
const nextIndex = state =>
  (state.index + state.images.length + 1) % state.images.length

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      isOpen: false,
      images: props.images,
      thumbs: props.thumbs,
    }

    this.renderLightBox = this.renderLightBox.bind(this)
    this.openLightBox = this.openLightBox.bind(this)
    this.closeLightbox = this.closeLightbox.bind(this)
    this.movePrev = this.movePrev.bind(this)
    this.moveNext = this.moveNext.bind(this)
  }

  openLightBox(index) {
    this.setState({
      index: index,
      isOpen: true,
    })
  }

  renderLightBox() {
    const { images, thumbs } = this.state
    return (
      <Lightbox
        mainSrc={images[this.state.index]}
        nextSrc={images[nextIndex(this.state)]}
        prevSrc={images[prevIndex(this.state)]}
        mainSrcThumbnail={thumbs[this.state.index]}
        nextSrcThumbnail={thumbs[nextIndex(this.state)]}
        prevSrcThumbnail={thumbs[prevIndex(this.state)]}
        onCloseRequest={this.closeLightbox}
        onMovePrevRequest={this.movePrev}
        onMoveNextRequest={this.moveNext}
      />
    )
  }

  closeLightbox() {
    this.setState({ isOpen: false })
  }

  movePrev() {
    this.setState(prevState => ({
      index: prevIndex(prevState),
    }))
  }

  moveNext() {
    this.setState(prevState => ({
      index: nextIndex(prevState),
    }))
  }

  render() {
    return (
      <>
        <div className="row">
          {this.state.thumbs.map((thumbnail, index) => {
            return (
              <div
                className="col-md-3 col-sm-6 px-0"
                key={index}
                onClick={() => this.openLightBox(index)}
              >
                <div className="m-1">
                  <Img fluid={thumbnail} className="rounded" />
                </div>
              </div>
            )
          })}
        </div>
        {this.state.isOpen && this.renderLightBox()}
      </>
    )
  }
}

export default Gallery
