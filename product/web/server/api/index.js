import schemas from './schema'

const RootQuery = `
  type Query {
    user(id: String!): User
  }
`

const SchemaDefinition = `
  schema {
    query: Query
  }
`

export const schema = [
  SchemaDefinition,
  RootQuery,
  ...schemas,
]

export const resolvers = {
  Query: {
    async user(root, args, context) {
      return await Meteor.users.findOne(context.userId);
    },
  },
  User: {
    emails: ({ emails }) => emails,
    phoneNumber: ({ phoneNumber }) => phoneNumber,
    formattedNumber: ({ phoneNumber }) => phoneNumber,
  }
}
