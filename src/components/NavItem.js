import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

const NavItem = ({ location, children, to }) => (
  <li className="nav-item active">
    <Link to={to} className="nav-link">
      {children}
    </Link>
  </li>
)

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
}

export default NavItem
