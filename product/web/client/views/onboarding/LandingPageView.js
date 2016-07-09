import React from 'react'
import { connect } from 'react-apollo';
import CenterCenter from '../../ui/layouts/CenterCenter'
import GoogleLoginButton from './GoogleLoginButton'
import colors from '../../ui/configuration/colors'
const { secondaryBackground } = colors

const LandingPageView = ({ currentUser, onboardingStep }) => (
  <CenterCenter style={style} column={true}>
    <GoogleLoginButton />
  </CenterCenter>
)

let style = {
  background: secondaryBackground,
}

export default LandingPageView
