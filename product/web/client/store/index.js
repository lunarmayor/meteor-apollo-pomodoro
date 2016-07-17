import { createStore } from 'redux'
import middleware from './middleware'
import reducers from '../reducers'
import gql from 'graphql-tag'

const store = createStore(
  reducers,
  middleware
)

window.reduxStore = store
window['gql'] = gql
export default store
