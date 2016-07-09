import schemas from './schema'
import { User } from './mutations/createUser'

const RootQuery = `
  type Query {
    me: User
  }
`

const RootMutation = `
  type Mutation {
    createUser(
      phoneNumber: String!
    ): User
  }
`

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`

export const schema = [
  SchemaDefinition,
  RootMutation,
  RootQuery,
  ...schemas,
]

const fromGoogleProfile = (user, property) => {
  return user.services &&
         user.services.google ? user.services.google[property] : undefined
}

export const resolvers = {
  Query: {
    async me(root, args, context) {
      return await Meteor.users.findOne(context.userId);
    },
  },
  Mutation: {
    ...User
  },

  User: {
    email: (user) => fromGoogleProfile(user, 'email'),
    firstName: (user) => fromGoogleProfile(user, 'given_name'),
    lastName: (user) => fromGoogleProfile(user, 'family_name'),
    fullName: (user) => fromGoogleProfile(user, 'name'),
    avatar: (user) => fromGoogleProfile(user, 'picture'),
  }
}
