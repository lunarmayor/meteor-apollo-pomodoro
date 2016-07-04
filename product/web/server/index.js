import { createApolloServer } from 'meteor/apollo'
import { schema, resolvers } from './api/schema'

createApolloServer({
  schema,
  resolvers,
  graphql: true,
  pretty: true,
})
