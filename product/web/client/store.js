import { createStore } from 'redux'
import middleware from './middleware'
import reducers from './reducers'

const store = createStore(
  reducer,
  middleware
)

window['gql'] = gql
export default store
