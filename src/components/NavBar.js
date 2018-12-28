import React from 'react'
import PropTypes from 'prop-types'

const NavBav = ({ containerClass, children }) => (
  <nav className="navbar navbar-expand bg-secondary">
    <div className={containerClass}>
      <ul className="navbar-nav mr-auto">{children}</ul>
    </div>
  </nav>
)

NavBav.propTypes = {
  children: PropTypes.node.isRequired,
  containerClass: PropTypes.string.isRequired,
}

export default NavBav
