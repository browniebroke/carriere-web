// @ts-ignore
import Typography from 'typography'
import { typographyTheme } from '@browniebroke/react-ui-components'

const bootstrapTheme = {
  ...typographyTheme,
  bodyFontFamily: ['Montserrat', 'Times New Roman', 'Times', 'serif'],
  headerFontFamily: ['Montserrat', 'Roboto', 'Arial', 'sans-serif'],
  headerWeight: 600,
}

const typography = new Typography(bootstrapTheme)

export const { scale, rhythm, options } = typography
export default typography
