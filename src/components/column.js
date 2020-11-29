import styled from 'styled-components'
import {
  genFlexOrdersFromProp,
  genMaxWidthsFromProps,
  genPaddingFromProps,
  getAlignSelf,
  getTextAlign,
} from './utils'

const Col = styled.div`
  flex-grow: 1;
  width: ${(props) => (props.width ? props.width : '100%')};
  padding-left: ${(props) => props.theme.gutterWidth};
  padding-right: ${(props) => props.theme.gutterWidth};
  ${getAlignSelf}
  ${genMaxWidthsFromProps}
  ${genFlexOrdersFromProp}
  ${getTextAlign}
  ${genPaddingFromProps}
`

export default Col
