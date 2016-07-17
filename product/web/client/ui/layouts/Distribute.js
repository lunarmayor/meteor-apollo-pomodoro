import React from 'react'
import FlexContainer from './FlexContainer'
import handlePadding from '../../utilities/handlePadding'
import radium from 'radium'

 const Distribute = ({ style, ...props}) => (
   <FlexContainer style={Object.assign({}, defaultStyle, style)} {...props}/>
 )

 let defaultStyle = {
   justifyContent: 'space-between',
 }

 export default handlePadding(Distribute)
