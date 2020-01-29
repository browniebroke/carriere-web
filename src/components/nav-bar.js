import React from 'react'
import PropTypes from 'prop-types'
import carriereIcon from '../images/logo-full.svg'
import { Link } from 'gatsby'

const NavBav = ({ containerClass, children }) => (
  <nav className="navbar navbar-expand bg-primary navbar-dark">
    <div className={containerClass}>
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <img
          src={carriereIcon}
          alt="Logo"
          aria-label="Logo"
          style={{ width: '200px' }}
          className="img-fluid mr-3"
        />
      </Link>
      <ul className="navbar-nav ml-auto">{children}</ul>
    </div>
  </nav>
)

NavBav.propTypes = {
  children: PropTypes.node.isRequired,
  containerClass: PropTypes.string.isRequired,
}

export default NavBav
