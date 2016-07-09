import * as constants from '../constants'
import { push } from 'react-router-redux'
import delay from '../utilities/delay'
import apollo from '../apollo'
const waitForUserDelay = 1000

export const signup = (phone) => {
  return (dispatch) => {
    dispatch(changeOnboardingStep('WAITING_FOR_USER_CREATION'))

    Accounts.createUserWithPhone({ phone }, (err, res) => {
      delay(waitForUserDelay).then(() => {
        dispatch(changeOnboardingStep('WAITING_FOR_PIN'))
      })
    })
  }
}

export const checkPin = (phone, pin) => {
  return (dispatch) => {
    dispatch(changeOnboardingStep('WAITING_FOR_USER_CREATION'))

    Accounts.verifyPhone(phone, pin, (err, res) => {
      dispatch(push('/'))
      console.log(err, res)
    })
  }
}

// example mutation
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
