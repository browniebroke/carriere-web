import { styledComponentsTheme } from '@browniebroke/react-ui-components'

export type SiteTheme = {
  colors: {
    primary: string
    secondary: string
    navbar: string
    navbarText: string
    success: string
    info: string
    warning: string
    danger: string
    black: string
    white: string
  }
  spacings: string[]
  mdBreakpoint: string
  containerMaxWidth: string
  fontSizes: {
    base: string
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    h6: string
  }
  baseFont: string
  headersFont: string
}

const baseFontSize = 1.25

export const theme: SiteTheme = {
  ...styledComponentsTheme,
  colors: {
    primary: '#c71f16',
    secondary: '#e5e5e5',
    navbar: '#c71f16',
    navbarText: '#ffffff',
    success: '#28a745',
    info: '#17a2b8',
    warning: '#ffc107',
    danger: '#dc3545',
    black: 'hsla(204,12.449720506%,0%,0.77)',
    white: '#ffffff',
  },
  fontSizes: {
    base: `${baseFontSize}rem`,
    h1: `${baseFontSize * 2}rem`,
    h2: `${baseFontSize * 1.3}rem`,
    h3: `${baseFontSize * 1.15}rem`,
    h4: `${baseFontSize * 1.1}rem`,
    h5: `${baseFontSize}rem`,
    h6: `${baseFontSize * 0.9}rem`,
  },
  baseFont: 'Montserrat, "Times New Roman", Times, serif',
  headersFont: 'Montserrat, Roboto, Arial, sans-serif',
}
