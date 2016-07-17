import { push } from 'react-router-redux'

export const login = () => {
  return (dispatch) => {
    Meteor.loginWithGoogle({}, (err) => {
      !err && dispatch(push('/'))
    })
  }
}
