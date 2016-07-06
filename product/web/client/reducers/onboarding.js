const startingStep = 'WAITING_FOR_NUMBER'
const onboardingReducer = (state = startingStep, { type, step }) => {
  switch (type) {
    case 'CHANGE_ONBOARDING_STEP':
      return step
    default:
      return state
  }
}

export default onboardingReducer
