import React from 'react'
import styled from 'styled-components'
import {
  Container,
  ExternalLink,
  ListInline,
  Row,
} from '@browniebroke/react-ui-components'
import { Theme, ThemeProps } from '@browniebroke/react-ui-components/src/types'

import Facebook from '../images/icons/facebook.svg'
import Phone from '../images/icons/phone.svg'

const FooterStyles = styled.footer<ThemeProps>`
  background-color: ${(props) => props.theme.colors.secondary};
  padding-top: ${(props) => props.theme.spacings[4]};
  padding-bottom: ${(props) => props.theme.spacings[4]};

  svg {
    fill: currentColor;
    height: 1.2em;
    margin-right: ${(props) => props.theme.spacings[1]};
  }
`

const FooterRowStyles = styled(Row)`
  justify-content: space-between;
`

interface FooterColumnProps {
  theme: Theme
  alignment: string
  fontSize?: string
  mdWidth?: number
}

const FooterColumn = styled.div<FooterColumnProps>`
  text-align: center;
  padding-bottom: ${(props) => props.theme.spacings[3]};
  width: 100%;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '100%')};

  @media (min-width: ${(props) => props.theme.gridBreakpoints.md}) {
    text-align: ${(props) => props.alignment};
    max-width: ${(props) => (props.mdWidth ? props.mdWidth : 100 / 3)}%;
  }
`

const ListUnstyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Footer = () => (
  <FooterStyles>
    <Container>
      <FooterRowStyles>
        <FooterColumn alignment="left">
          <ListUnstyled>
            <li>
              <ExternalLink
                to="https://www.facebook.com/carrierealla/"
                title="Notre Page Facebook"
              >
                <Facebook />
                Facebook
              </ExternalLink>
            </li>
            <li>
              <a href="tel:+33565621365">
                <Phone />
                Tel: 05 65 62 13 65
              </a>
            </li>
          </ListUnstyled>
        </FooterColumn>
        <FooterColumn alignment="right">
          <ExternalLink
            to="https://www.infogreffe.fr/entreprise-societe/812786986"
            title="Info Greffe"
          >
            SIRET 812 786 986 R.C.S. RODEZ
          </ExternalLink>
        </FooterColumn>
      </FooterRowStyles>
      <FooterRowStyles>
        <FooterColumn alignment="center" mdWidth={100} fontSize="80%">
          Icônes (
          <ExternalLink
            to="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
          >
            CC 3.0 BY
          </ExternalLink>
          ):
          <ListInline>
            <ExternalLink to="https://www.freepik.com/" title="Freepik">
              Freepik
            </ExternalLink>
            <ExternalLink
              to="https://www.flaticon.com/authors/gregor-cresnar"
              title=""
            >
              Gregor Cresnar
            </ExternalLink>
            <ExternalLink
              to="https://www.flaticon.com/authors/pixel-perfect"
              title=""
            >
              Pixel perfect
            </ExternalLink>
          </ListInline>
        </FooterColumn>
      </FooterRowStyles>
    </Container>
  </FooterStyles>
)
