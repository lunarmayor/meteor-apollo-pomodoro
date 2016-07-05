import React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Router, Route } from 'react-router'
// providers
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// views
import AppView from './views/AppView'
import Home from './views/Home'
import LandingPageView from './views/onboarding/LandingPageView'

import store from './store'
import history from './history'
import apollo from './apollo'

import { isAuthed } from './utilities/auth'

Meteor.startup(() => {
  render(
    <ApolloProvider client={apollo} store={store}>
      <MuiThemeProvider>
        <Router history={history}>
          <Route path="" component={AppView} >
            <Route path="login" component={LandingPageView} />
            <Route path="/" component={Home} onEnter={isAuthed} />
          </Route>
        </Router>
      </MuiThemeProvider>
    </ApolloProvider>,
    document.getElementById('react-app')
  )
})
