import React from 'react'
import { AppBar } from 'material-ui'

const Home = ({ currentUser }) => (
  <div>
    <Header/>
  </div>
)

const Header = ({ currentUser, title = "Deal Breaker" }) => (
  <AppBar
    title={title}
  />
)

export default Home
