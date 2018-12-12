import React from 'react'
import { Link } from 'gatsby'
import carriereIcon from '../images/carriere-icon.svg'

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center brand-font"
        >
          <img
            src={carriereIcon}
            alt=""
            style={{ width: '40px' }}
            className="img-fluid mr-3"
          />
          S.A.R.L. <br /> Carriere <br /> ALLA
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
