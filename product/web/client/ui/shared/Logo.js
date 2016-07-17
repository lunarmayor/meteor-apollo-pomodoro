import React from 'react'
import colors from '../configuration/colors'
import { H1 } from '../typography'
import radium from 'radium'
const { secondaryText } = colors

const Logo = ({ style }) => (
  <H1 style={[defaultStyle, style]}>
    Pomodoro
  </H1>
)

let defaultStyle = {
  color: secondaryText,
  fontWeight: 300,
}

export default radium(Logo)

