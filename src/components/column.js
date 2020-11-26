import styled from 'styled-components'

const genColWidth = (props) => {
  return Object.keys(props.theme.gridBreakpoints).map((k) => {
    const bpProp = `${k}Width`
    if (props[bpProp] !== undefined) {
      return `@media (min-width: ${props.theme.gridBreakpoints[k]}) {
        max-width: ${props[bpProp]};
      }
      `
    } else {
      return ''
    }
  })
}

const genColOrder = (props) => {
  return Object.keys(props.theme.gridBreakpoints).map((k) => {
    const bpProp = `${k}Order`
    if (props[bpProp] !== undefined) {
      return `@media (min-width: ${props.theme.gridBreakpoints[k]}) {
        order: ${props[bpProp]};
      }
      `
    } else {
      return ''
    }
  })
}

// TODO: make it a common utility?
const getAlignSelf = (props) =>
  props.alignSelf ? `align-self: ${props.alignSelf};` : ''

const Col = styled.div`
  flex-grow: 1;
  width: 100%;
  padding-left: ${(props) => props.theme.gutterWidth};
  padding-right: ${(props) => props.theme.gutterWidth};
  ${getAlignSelf}
  ${genColWidth}
  ${genColOrder}
`

export default Col
