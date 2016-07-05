import React from 'react'
import radium from 'radium'

const CenterCenter = ({ children, style }) =>(
  <div style={[defaultStyles, style]}>
    {children}
  </div>
)

const defaultStyles = {
  flex: 1,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export default radium(CenterCenter)
