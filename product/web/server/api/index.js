import schemas from './schema'
import { User } from './mutations/createUser'

const RootQuery = `
  type Query {
    user(id: String!): User
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

export const resolvers = {
  Query: {
    async user(root, args, context) {
      return await Meteor.users.findOne(context.userId);
    },
  },
  Mutation: {
    ...User
  },

  User: {
    emails: ({ emails }) => emails,
    phoneNumber: ({ phoneNumber }) => phoneNumber,
    formattedPhoneNumber: ({ phoneNumber }) => phoneNumber,
    isVerified: (user) => user && user.phone && user.phone.verified
  }
}
