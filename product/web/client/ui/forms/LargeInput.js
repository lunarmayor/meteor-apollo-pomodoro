import React from 'react'
import radium from 'radium'

const LargeInput = ({ type = 'tex', placeholder = '', styles, ...props}) => (
  <input
    style={[defaultStyles, styles]}
    type={type}
    placeholder={placeholder}
    {...props}
  />
)

const defaultStyles = {
  padding: "12px 4px",
  fontFamily: "helvetica neue",
  fontSize: "28px",
  lineHeight: "40px",
  fontWeight: "200",
  border: "none",
  textAlign: "center",
  borderRadius: "25px",
  outline: "none",
}

export default radium(LargeInput)
