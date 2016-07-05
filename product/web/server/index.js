import { createApolloServer } from 'meteor/apollo'
import { schema, resolvers } from './api'

createApolloServer({
  schema,
  resolvers,
  graphql: true,
  pretty: true,
})
