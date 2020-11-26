import styled from 'styled-components'
import {
  genFlexOrdersFromProp,
  genMaxWidthsFromProps,
  getAlignSelf,
  getTextAlign,
} from './utils'

const Col = styled.div`
  flex-grow: 1;
  width: 100%;
  padding-left: ${(props) => props.theme.gutterWidth};
  padding-right: ${(props) => props.theme.gutterWidth};
  ${getAlignSelf}
  ${genMaxWidthsFromProps}
  ${genFlexOrdersFromProp}
  ${getTextAlign}
`

export default Col
