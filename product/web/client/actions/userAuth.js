import * as constants from '../constants'
import { push } from 'react-router-redux'
import apollo from '../apollo'

export const signup = (phoneNumber) => {
  return (dispatch) => {
    dispatch(changeOnboardingStep('WAITING_FOR_USER_CREATION'))

    Accounts.createUserWithPhone({ phone: phoneNumber }, (err, res) => {
      console.log(err)
      setTimeout(() => {
        dispatch(changeOnboardingStep('WAITING_FOR_PIN'))
      }, 100)
    })
  }
}

const example = () => {
	apollo.mutate({
		mutation: gql`
			mutation createUser($phoneNumber: String!) {
				createUser(phoneNumber: $phoneNumber) {
					phoneNumber
					_id
				}
			}
		`,
		variables: {
			phoneNumber
		}
	}).then(({ errors, data }) => console.log(errors) || errors || dispatch(push('/')))
}

const changeOnboardingStep = (step) => {
  return {
    step,
    type: 'CHANGE_ONBOARDING_STEP',
  }
}
