import schemas from './schema'
import { User } from './mutations/createUser'

const RootQuery = `
  type Query {
    me: User
    questions: [Question]
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
    async me(root, args, context) {
      return await Meteor.users.findOne(context.userId);
    },
  },
  Mutation: {
    ...User
  },

  User: {
    emails: ({ emails }) => emails,
    phoneNumber: ({ phone }) => (phone && phone.number) || '',
    formattedPhoneNumber: ({ phone }) => (phone && phone.number) || '',
    isVerified: ({ phone }) => phone && phone.verified
  }
}
