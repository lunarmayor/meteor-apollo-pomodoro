import React from 'react'
import colors from '../configuration/colors'
import Logo from './Logo'
const { secondaryBackground } = colors

const Header = () => (
  <header style={headerStyle}>
    <Logo style={{fontSize: 20}}/>
  </header>
)

let headerStyle = {
  background: secondaryBackground,
  padding: 15,
  position: 'fixed',
  width: '100%',
}

export default Header
