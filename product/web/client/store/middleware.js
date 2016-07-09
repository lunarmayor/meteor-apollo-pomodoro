import { applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import DevTools from './reduxDevtools'
import apollo from '../apollo'

const middleware = applyMiddleware(
  thunkMiddleware,
  apollo.middleware(),
  routerMiddleware(browserHistory),
)

export default compose(middleware, DevTools.instrument())

