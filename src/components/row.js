import styled from 'styled-components'
import { Row as BaseRow } from '@browniebroke/react-ui-components'

const genSpacingFromProps = (props, spacingType) => {
  const capFirstSpacingType =
    spacingType[0].toUpperCase() + spacingType.slice(1)
  const sideDirections = [
    ['top', 'y'],
    ['right', 'x'],
    ['bottom', 'y'],
    ['left', 'x'],
  ]
  const spacingCss = sideDirections.map(([side, direction]) => {
    const value =
      props[`${side}${capFirstSpacingType}`] ??
      props[`${direction}${capFirstSpacingType}`]
    if (value === undefined) {
      return ''
    }
    return `${spacingType}-${side}: ${props.theme.spacings[value - 1]};`
  })
  if (props[`side${capFirstSpacingType}`] !== undefined) {
    spacingCss.push(
      `${spacingType}: ${
        props.theme.spacings[props[`side${capFirstSpacingType}`] - 1]
      };`
    )
  }
  return spacingCss
}

const genMarginFromProps = (props) => genSpacingFromProps(props, 'margin')
const genPaddingFromProps = (props) => genSpacingFromProps(props, 'padding')

const Row = styled(BaseRow)`
  ${genMarginFromProps}
  ${genPaddingFromProps}
`

export default Row
