import phone from 'phone'
export const isPhoneNumber = number => !!phone(number).length
