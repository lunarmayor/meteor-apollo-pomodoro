import phone from 'phone'

export const User =  {
  async createUser(root, { phoneNumber }, context) {
    let phoneNumberFormatted = phone(phoneNumber)[0]

    let _id = Accounts.createUserWithPhone({ phone: phoneNumberFormatted })
    console.log(_id)

    return {
      _id,
      phoneNumber: phoneNumberFormatted,
    }
  }
}
