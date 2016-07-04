import React from 'react'
import Logo from '../../ui/shared/Logo'
import { signup } from '../../actions/userAuth'
import { FillParent } from '../../ui/layouts/'
import { connect } from 'react-apollo';

const LoginView = ({ dispatch }) => (
  <FillParent>
    <div onClick={() => dispatch(signup())}>login</div>
  </FillParent>
)

export default connect()(LoginView)

