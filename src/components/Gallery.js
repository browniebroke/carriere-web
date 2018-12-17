import React, { Component } from 'react'
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
    this.moveToIndex = this.moveToIndex.bind(this)
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

  moveToIndex(index) {
    this.setState({
      index,
    })
  }

  movePrev() {
    this.moveToIndex(prevIndex(this.state))
  }

  moveNext() {
    this.moveToIndex(nextIndex(this.state))
  }

  render() {
    return (
      <>
        <div className="row">
          {this.state.thumbs.map((thumbnail, index) => {
            return (
              <div className="col-md-3 col-sm-6" key={index}>
                <div
                  className="m-1"
                  style={{
                    width: '100%',
                    paddingTop: '100%',
                  }}
                  onClick={() => this.openLightBox(index)}
                >
                  <span
                    className="img-square-bg-image"
                    style={{ backgroundImage: `url(${thumbnail})` }}
                  />
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
