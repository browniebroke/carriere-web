import styled from 'styled-components'
import { Row as BaseRow } from '@browniebroke/react-ui-components'

import {
  genMarginFromProps,
  genPaddingFromProps,
  getJustifyContent,
} from './utils'

const Row = styled(BaseRow)`
  ${genMarginFromProps}
  ${genPaddingFromProps}
  ${getJustifyContent}
`

export default Row
