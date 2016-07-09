import React from 'react'
import { connect } from 'react-apollo';
import CenterCenter from '../../ui/layouts/CenterCenter'
import NumberForm from './NumberForm'
import PinForm from './PinForm'
import Loader from './Loader'
import Logo from '../../ui/shared/Logo'

const LandingPageView = ({ currentUser, onboardingStep }) => (
  <CenterCenter column={true} style={{flex: 'none'}}>
    <img src="/Group 4.png" style={imageStyle}/>
    <CenterCenter style={{ height: '80px', flex: 'none' }}>
      {onboardingStep === 'WAITING_FOR_NUMBER' && <NumberForm />}
      {onboardingStep === 'WAITING_FOR_USER_CREATION' && <Loader />}
      {onboardingStep === 'WAITING_FOR_PIN' && <PinForm currentUser={currentUser}/>}
    </CenterCenter>

  </CenterCenter>
)

let imageStyle = {
  width: 150,
  borderRadius: '50%',
  padding: 24
}

export default connect({
  mapStateToProps(state) {
    return {
      onboardingStep: state.onboarding
    }
  }
})(LandingPageView)

