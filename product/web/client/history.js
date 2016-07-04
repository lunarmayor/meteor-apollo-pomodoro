import store from './store'
import { browserHistory } from 'react-router'
const history = syncHistoryWithStore(browserHistory, store)

export default history
