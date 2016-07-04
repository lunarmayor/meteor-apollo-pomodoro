import * as constants from '../constants'
import { push } from 'react-router-redux'

export function signup(email = 'mikehmorrissey@gmail.com', password = 'ahsadfasd') {
  return function(dispatch) {
    Accounts.createUser({ email, password }, (err, res) => {
      if (err) {
        dispatch(login({ error: err }))
      } else {
        dispatch(push('/'))
        dispatch(login({ loggedIn: true }))
      }
    })
  }
}

export function login(data) {
  return {
    type: constants.USER_LOGGED_IN,
    payload: data
  }
}

export function logout() {
  return {
    type: constants.USER_LOGGED_OUT
  }
}
