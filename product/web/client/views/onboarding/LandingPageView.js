import React from 'react'
import { reduxForm } from 'redux-form'
import phone from 'phone'

const LandingPageView = ({ currentUser }) => (
  <div>
    <NumberForm />
  </div>
)

const validate = values => {
  const errors = {}
  if (!values.phone) {
    errors.phone = 'required'
  } else if (!phone(values.phone).length) {
    errors.phone = 'sorry this doesn\'t look like a real number'
  }

  return errors
}

const checkForValidNumber = (e) => {
  if (phone(e.target.value).length) {

  }
}

const NumberForm = ({ fields: { phone }, handleSubmit, dispatch }) => (
  <form onSubmit={handleSubmit(() => {})}>
    <div>
      <label>Phone Number</label>
      <input
        type="text"
        placeholder="(555) 867-1913"
        {...phone}
        onKeyUp={({ target }) => dispatch(checkForValidNumber(target.value))}
      />
      {phone.touched && phone.error && <div>{phone.error}</div>}
    </div>
  </form>
)

export default reduxForm({
  form: 'phoneNumber',
  fields: ['phone'],
  validate,
})(NumberForm)
