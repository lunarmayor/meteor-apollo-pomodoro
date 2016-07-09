import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/userAuth'
const googleButton = '/images/google-signin@2x.png'

const GoogleLoginButton = ({ login }) => (
  <div onClick={login}>
    <img style={style} src={googleButton} />
  </div>
)

let style = {
  zoom: '60%'
}

export default connect(null, { login })(GoogleLoginButton)
