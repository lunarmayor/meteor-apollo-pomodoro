import React from 'react'
import radium from 'radium'

const H1 = ({ style, children, ...props }) => (
  <div style={[defaultStyle, style]} {...props}>
    {children}
   </div>
)

let defaultStyle = {
  fontWeight: 600,
  fontSize: 36,
  letterSpacing: '2px',
}

export default radium(H1)
