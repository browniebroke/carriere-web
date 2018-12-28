import React from 'react'
import { Link } from 'gatsby'
import carriereIcon from '../images/carriere-icon.svg'
import NavBav from './NavBar'
import NavItem from './NavItem'
import PropTypes from 'prop-types'

const Header = ({ location, data, containerClass }) => (
  <header>
    <div className="navbar-dark bg-primary">
      <div className={containerClass}>
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center brand-font"
        >
          <img
            src={carriereIcon}
            alt=""
            style={{ width: '60px' }}
            className="img-fluid mr-3"
          />
          S.A.R.L. <br /> Carriere <br /> ALLA
        </Link>
      </div>
    </div>
    <NavBav containerClass={containerClass}>
      <NavItem location={location} to="/">
        Acceuil
      </NavItem>
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
