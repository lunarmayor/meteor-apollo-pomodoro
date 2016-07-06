import React from 'react'
import { connect } from 'react-apollo';
import CenterCenter from '../../ui/layouts/CenterCenter'
import NumberForm from './NumberForm'
import Loader from './Loader'

const LandingPageView = ({ currentUser, onboardingStep }) => (
  <CenterCenter>
    {onboardingStep === 'WAITING_FOR_NUMBER' && <NumberForm />}
    {onboardingStep === 'WAITING_FOR_USER_CREATION' && <Loader />}

  </CenterCenter>
)

export default connect({
  mapStateToProps(state) {
    return {
      onboardingStep: state.onboarding
    }
  }
})(LandingPageView)

