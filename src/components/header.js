import React from 'react'
import NavBav from './NavBar'
import NavItem from './NavItem'
import PropTypes from 'prop-types'

const Header = ({ location, data, containerClass }) => (
  <header>
    <NavBav containerClass={containerClass}>
      <NavItem location={location} to="/photos/">
        Photos
      </NavItem>
    </NavBav>
  </header>
)

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  containerClass: PropTypes.string.isRequired,
}

export default Header
