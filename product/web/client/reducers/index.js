import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer'
import apollo from '../apollo'

export default combineReducers({
  routing: routerReducer,
  user: userReducer,
  form: formReducer,
  apollo: apollo.reducer(),
})
