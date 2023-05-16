import { extendTheme } from '@chakra-ui/react'
const customTheme = {
  fonts: {
    body: 'Montserrat, "Times New Roman", Times, serif',
    heading: 'Montserrat, Roboto, Arial, sans-serif',
  },
  colors: {
    primary: '#c71f16',
    primaryDark: '#a71a12',
    secondary: '#e5e5e5',
  },
  sizes: {
    'site-logo': {
      height: '60px',
    },
  },
  styles: {
    global: {
      html: {
        fontSize: '1.25rem',
        overflowY: 'scroll',
      },
      a: {
        textDecoration: 'none',
        color: 'primary',
        '&:active, &:hover': {
          textDecoration: 'underlined',
          color: 'primaryDark',
        },
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        marginTop: 0,
        lineHeight: '1.1',
        fontWeight: '600',
        textRendering: 'optimizeLegibility',
      },
    },
  },
}

export const theme = extendTheme(customTheme)
