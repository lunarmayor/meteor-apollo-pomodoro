import React from 'react'
import radium from 'radium'
import handlePadding from '../../utilities/handlePadding'

const CurrentTimer = ({ style, ...props }) => (
  <div style={[defaultStyle, style]} {...props} />
)

let defaultStyle = {
}

export default handlePadding(radium(CurrentTimer))
