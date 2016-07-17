import React from 'react'
import { connect } from 'react-apollo';
import CenterCenter from '../../ui/layouts/CenterCenter'
import GoogleLoginButton from './GoogleLoginButton'
import Logo from '../../ui/shared/Logo'
import colors from '../../ui/configuration/colors'
const { secondaryBackground } = colors

const LandingPageView = ({ currentUser, onboardingStep }) => (
  <CenterCenter style={style} column={true}>
    <Logo style={logoStyle}/>
    <GoogleLoginButton />
  </CenterCenter>
)

let style = {
  background: secondaryBackground,
}

let logoStyle = {
  marginBottom: 30,
}

export default LandingPageView
