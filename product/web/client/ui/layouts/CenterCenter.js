import React from 'react'
import radium from 'radium'

const CenterCenter = ({ children, style, column }) =>(
  <div style={[defaultStyles, style, column && columnStyle]}>
    {children}
  </div>
)

const columnStyle = {
  flexDirection: 'column',
}

const defaultStyles = {
  flex: 1,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export default radium(CenterCenter)
