import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ containerClass }) => (
  <footer className="footer mt-auto bg-secondary py-5">
    <div className={containerClass}>Footer content here</div>
  </footer>
)

Footer.propTypes = {
  containerClass: PropTypes.string.isRequired,
}

export default Footer
