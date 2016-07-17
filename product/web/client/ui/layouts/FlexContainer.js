import React from 'react'
import handlePadding from '../../utilities/handlePadding'
import radium from 'radium'

const getFlexDirection = (direction = 'row', reverse) => {
  if (reverse) {
    return direction === 'row' ? 'row-reverse' : 'column-reverse'
  }

  return direction === 'row' ? 'row' : 'column'
}

const FlexContainer = ({ direction, reverse, style, ...props }) => (
  <div style={[
    defaultStyle,
    { flexDirection: getFlexDirection(direction, reverse) },
    style
  ]} {...props} />
)

let defaultStyle = {
  display: 'flex'
}

export default handlePadding(radium(FlexContainer))
