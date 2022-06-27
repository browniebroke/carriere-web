import { createGlobalStyle } from 'styled-components'
import { SiteTheme } from '../theme'
// @ts-ignore
import * as sanitizeCss from 'sanitize.css'

type SiteThemeProps = {
  theme: SiteTheme
}

export const GlobalStyles = createGlobalStyle<SiteThemeProps>`
  ${sanitizeCss}
  :root {}
  html {
    --black: ${({ theme }) => theme.colors.black};
    --white: ${({ theme }) => theme.colors.white};
    --primary: ${({ theme }) => theme.colors.primary};
    
    font: 100%/1.5 ${({ theme }) => theme.baseFont};
    overflow-y: scroll;
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${({ theme }) => theme.headersFont};
      color: var(--black);
      font-weight: 600;
      margin: 0;
      text-rendering: optimizeLegibility;
      line-height: 1.1;
    }
  }
  main {
    flex: 1 0 auto;
  }
  p {
    margin: 0 0 1.4rem 0;
  }
  a {
    text-decoration: none;
    color: var(--primary);
    
    &:active,
    &:hover {
      text-decoration: underlined;
      color: rgb(159, 25, 18);;
    }
  }
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.h1};
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.h2};
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.h3};
  }
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.h4};
  }
  h5 {
    font-size: ${({ theme }) => theme.fontSizes.h5};
  }
  h6 {
    font-size: ${({ theme }) => theme.fontSizes.h6};
  }
`
