import React from 'react'
import { AppBar } from 'material-ui'
import QuestionContainer from './questions/QuestionContainer'

const Home = ({ currentUser }) => (
  <div>
    <Header/>
    <QuestionContainer />
  </div>
)

const Header = ({ currentUser, title = "Proxi" }) => (
  <AppBar title={title} style={headerStyle} showMenuIconButton={false} />
)

let headerStyle = {
  backgroundColor: '#FFE9B0',
  color: '',
  padding: '0 10',
}

export default Home
