import UsersCollection from '../collections/UsersCollection'
import { result } from 'lodash'

const description = `
  ### User

  User describes the people using our App!
  The current user can be found by querying \`me\`

  \`\`\`
  {
    me {
      firstName
      lastName
    }
  }
  \`\`\`
`

export const UserSchema = `
  type User {
    _id: String
    email: String
    firstName: String
    lastName: String
    fullName: String
    avatar: String
    __description: String
  }
`

export const UserResolver = {
  User: {
    email: (user) => fromGoogleProfile(user, 'email'),
    firstName: (user) => fromGoogleProfile(user, 'given_name'),
    lastName: (user) => fromGoogleProfile(user, 'family_name'),
    fullName: (user) => fromGoogleProfile(user, 'name'),
    avatar: (user) => fromGoogleProfile(user, 'picture'),
    __description: () => description,
  }
}

export const UserQueries = {
  async me(root, args, { userId }) {
    return await UsersCollection.findOne(userId)
  }
}

const fromGoogleProfile = (user, property) => {
  return result(user, `services.google.${property}`)
}
