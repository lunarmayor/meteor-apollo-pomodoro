import React from 'react'
import Header from '../ui/shared/Header'

const Home = ({ currentUser, children }) => (
  <div>
    <Header/>
    <div style={spacerStyle}/>
    {React.cloneElement(children, { currentUser })}
  </div>
)

let spacerStyle = {
  height: 54,
}

export default Home
