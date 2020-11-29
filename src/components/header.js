import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  Header as HeaderContainer,
  Navigation,
} from '@browniebroke/react-ui-components'

import SiteLogo from '../images/icons/logo-full.svg'

const StyledLogo = styled(SiteLogo)`
  width: 200px;
  path {
    fill: currentColor;
  }
`

const Header = () => (
  <HeaderContainer>
    <Link to="/" title="Acceuil" aria-label="Acceuil">
      <StyledLogo />
    </Link>
    <Navigation direction="row">
      <Link to="/photos/">Photos</Link>
      <Link to="/contact/">Contact</Link>
    </Navigation>
  </HeaderContainer>
)

export default Header
