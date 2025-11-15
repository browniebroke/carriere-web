import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  globalCss: {
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
    ':where(svg:not([fill]))': {
      fill: 'currentColor',
    },
  },
  theme: {
    tokens: {
      fonts: {
        body: { value: 'Montserrat, "Times New Roman", Times, serif' },
        heading: { value: 'Montserrat, Roboto, Arial, sans-serif' },
      },
      colors: {
        primary: { value: '#c71f16' },
        primaryDark: { value: '#a71a12' },
        secondary: { value: '#e5e5e5' },
      },
      sizes: {
        'site-logo.height': { value: '60px' },
        'site-logo.iconWidth': { value: '60px' },
        'site-logo.nameWidth': { value: '121px' },
      },
    },
    recipes: {
      heading: {
        base: {
          marginTop: 6,
          marginBottom: 2,
          lineHeight: '1.1',
          fontWeight: '600',
          textRendering: 'optimizeLegibility',
        },
      },
      text: {
        base: {
          marginBottom: 2,
        },
      },
      link: {
        base: {
          color: 'primary',
          '&:active, &:hover': {
            textDecoration: 'none',
            color: 'primaryDark',
          },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
