import React from 'react'
import PropTypes from 'prop-types'

const NavBav = ({ children }) => (
  <nav className="navbar navbar-expand bg-secondary">
    <div className="container">
      <ul className="navbar-nav mr-auto">{children}</ul>
    </div>
  </nav>
)

NavBav.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NavBav
