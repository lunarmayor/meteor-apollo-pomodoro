import { createApolloServer } from 'meteor/apollo'
import { schema, resolvers, mocks } from './api'

createApolloServer({
  schema,
  resolvers,
  mocks,
  graphiql: true,
  pretty: true,
})

