import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-dark bg-primary">
    <Link to="/" className="navbar-brand">
      Bienvenue!
    </Link>
  </nav>
)

export default Header
