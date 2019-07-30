import React from 'react'
import PropTypes from 'prop-types'

const ExternalLink = ({ children, to, title, className }) => (
  <a
    href={to}
    title={title}
    className={className}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
)

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
}

export default ExternalLink
