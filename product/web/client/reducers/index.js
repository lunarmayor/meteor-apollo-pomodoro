import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form';
import apollo from '../apollo'

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  apollo: apollo.reducer(),
})
