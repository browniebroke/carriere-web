import React from 'react'

const themeSpacing = (props, value) => props.theme.spacings[value - 1]

const capFirst = (value) => value[0].toUpperCase() + value.slice(1)

/**
 * Map a CSS property to a React component property:
 * @param cssName: CSS property name e.g. max-width
 * @returns string: component property e.g. maxWidth
 */
const cssToProp = (cssName) => {
  // Split on hyphens
  const parts = cssName.split('-')
  const casedParts = parts.map((p, index) => {
    if (index === 0) {
      // First part, do not change case
      return p
    } else {
      // Change first letter to uppercase
      return capFirst(p)
    }
  })
  return casedParts.join('')
}

const genSpacingFromProps = (props, spacingType) => {
  const capFirstSpacingType = capFirst(spacingType)
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
    return `${spacingType}-${side}: ${themeSpacing(props, value)};`
  })
  if (props[`side${capFirstSpacingType}`] !== undefined) {
    const value = props[`side${capFirstSpacingType}`]
    spacingCss.push(`${spacingType}: ${themeSpacing(props, value)};`)
  }
  return spacingCss
}

const genResponsiveFromProp = (props, suffix, cssName) => {
  return Object.keys(props.theme.gridBreakpoints).map((bp) => {
    const bpProp = `${bp}${suffix}`
    if (props[bpProp] !== undefined) {
      const cssValue = props[bpProp]
      return `@media (min-width: ${props.theme.gridBreakpoints[bp]}) {
        ${cssName}: ${cssValue};
      }
      `
    } else {
      return ''
    }
  })
}

const getCssFromProp = (props, cssName) => {
  const propName = cssToProp(cssName)
  return props[propName] ? `${cssName}: ${props[propName]};` : ''
}

export const genMarginFromProps = (props) =>
  genSpacingFromProps(props, 'margin')
export const genPaddingFromProps = (props) =>
  genSpacingFromProps(props, 'padding')

export const genMaxWidthsFromProps = (props) =>
  genResponsiveFromProp(props, 'MaxWidth', 'max-width')

export const genFlexOrdersFromProp = (props) =>
  genResponsiveFromProp(props, 'Order', 'order')

export const getJustifyContent = (props) =>
  getCssFromProp(props, 'justify-content')
export const getAlignSelf = (props) => getCssFromProp(props, 'align-self')
export const getTextAlign = (props) => getCssFromProp(props, 'text-align')
