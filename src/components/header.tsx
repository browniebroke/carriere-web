import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  Header as HeaderContainer,
  Navigation,
} from '@browniebroke/react-ui-components'

import SiteLogo from '../images/icons/logo-compact.svg'
import SiteName from '../images/icons/logo-name.svg'

const StyledLogo = styled(SiteLogo)`
  height: 60px;
  path {
    fill: currentColor;
  }
`

const StyledName = styled(SiteName)`
  height: 60px;
  path {
    fill: currentColor;
  }
  @media (max-width: ${(props) => props.theme.gridBreakpoints.sm}) {
    display: none;
  }
`

const LogoWrapper = styled.div`
  display: flex;
`

const Header: React.FC = () => (
  <HeaderContainer>
    <Link to="/" title="Acceuil" aria-label="Acceuil">
      <LogoWrapper>
        <StyledLogo />
        <StyledName />
      </LogoWrapper>
    </Link>
    <Navigation direction="row">
      <Link to="/produits/">Produits</Link>
      <Link to="/contact/">Contact</Link>
    </Navigation>
  </HeaderContainer>
)

export default Header
