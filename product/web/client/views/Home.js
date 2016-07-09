import React from 'react'
import { AppBar } from 'material-ui'

const Home = ({ currentUser }) => (
  <div>
    <Header/>
  </div>
)

const Header = ({ currentUser, title = "" }) => (
  <header>hi</header>
)

let headerStyle = {
  color: '',
  padding: '0 10',
}

export default Home
