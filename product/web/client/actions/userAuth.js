import * as constants from '../constants'
import { push } from 'react-router-redux'

export const signup = (phoneNumber) => {
  return (dispatch) => {
    client.mutate({
      mutation: gql`
        mutation createUser(
          $phoneNumber: String!
        ) {
          status
        }
      `,
      variables: {
        phoneNumber
      }
    }).then(({ errors, data }) => error || dispatch(push('/')))
  }
}
