import React from 'react'
import { Link } from 'gatsby'
import carriereIcon from '../images/carriere-icon.svg'
import NavBav from './NavBar'
import NavItem from './NavItem'

const Header = ({ location }) => (
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
        Stuff
      </NavItem>
      <NavItem location={location} to="/page-2/">
        Other thing
      </NavItem>
      <NavItem location={location} to="/page-3/">
        Amazing stuff
      </NavItem>
    </NavBav>
  </header>
)

export default Header
