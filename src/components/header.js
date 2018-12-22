import React from 'react'
import { Link } from 'gatsby'
import carriereIcon from '../images/carriere-icon.svg'
import NavBav from './NavBar'
import NavItem from './NavItem'

const Header = ({ location, data }) => (
  <header>
    <div className="navbar-dark bg-primary">
      <div className="container">
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
    <NavBav>
      <NavItem location={location} to="/">
        Acceuil
      </NavItem>
      <NavItem location={location} to="/photos/">
        Photos
      </NavItem>
      <NavItem location={location} to="/my-files/">
        My files
      </NavItem>
    </NavBav>
  </header>
)

export default Header
