import React from 'react'
import { checkPin } from '../../actions/userAuth'
import { reduxForm } from 'redux-form'
import LargeInput from '../../ui/forms/LargeInput'

const checkLength = (number, pin, dispatch) => {
  if (pin.length === 4) {
    dispatch(checkPin(number, pin))
  }
}

const PinForm = ( { currentUser: { user }, fields: { pin }, handleSubmit, dispatch }) => (
  <form onSubmit={handleSubmit(() => {})}>
    <LargeInput
      placeholder="193139"
      onKeyUp={({ target }) => checkLength(user.phoneNumber, target.value, dispatch)}
      {...pin}
    />
  </form>
)

export default reduxForm({
  form: 'pin',
  fields: ['pinNumber'],
})(PinForm)
