import React from 'react'
import { reduxForm } from 'redux-form'
import { isPhoneNumber } from '../../utilities/phoneNumber'
import { signup } from '../../actions/userAuth'

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
    <div>
      <input
        style={inputStyles}
        type="text"
        placeholder="(555) 867-1913"
        {...phone}
        onKeyUp={({ target }) => checkForValidNumber(target.value, dispatch)}
      />
      {phone.touched && phone.error && <div>{phone.error}</div>}
    </div>
  </form>
)

const inputStyles = {
  "padding": "12px 4px",
  "fontFamily": "helvetica neue",
  "fontSize": "28px",
  "lineHeight": "40px",
  "fontWeight": "200",
  "border": "none",
  "textAlign": "center",
  "borderRadius": "25px",
  "outline": "none",
}

export default reduxForm({
  form: 'phoneNumber',
  fields: ['phone'],
  validate,
})(NumberForm)
