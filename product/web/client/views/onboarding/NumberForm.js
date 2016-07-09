import React from 'react'
import { reduxForm } from 'redux-form'
import { isPhoneNumber } from '../../utilities/phoneNumber'
import { signup } from '../../actions/userAuth'
import LargeInput from '../../ui/forms/LargeInput'

// move to validations folder?
const validate = values => {
  const errors = {}
  if (!values.phone) {
    errors.phone = 'required'
  } else if (!isPhoneNumber(values.phone)) {
    errors.phone = 'sorry this doesn\'t look like a real number'
  }

  return errors
}

const checkForValidNumber = (number, dispatch) => {
  if (isPhoneNumber(number)) {
    dispatch(signup(number))
  }
}

const NumberForm = ({ fields: { phone }, handleSubmit, dispatch }) => (
  <form onSubmit={handleSubmit(() => {})}>
    <LargeInput
      placeholder="(555) 867-1913"
      onKeyUp={({ target }) => checkForValidNumber(target.value, dispatch)}
      {...phone}
    />
  </form>
)

export default reduxForm({
  form: 'phoneNumber',
  fields: ['phone'],
  validate,
})(NumberForm)
