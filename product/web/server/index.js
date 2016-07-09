import { createApolloServer } from 'meteor/apollo'
import { mockServer } from 'graphql-tools'
import { schema, resolvers } from './api'
import Mocks from './Mocks'

createApolloServer({
  schema,
  resolvers,
  graphiql: true,
  pretty: true,
  mocks: Mocks,
})

Accounts._options.sendPhoneVerificationCodeOnCreation = true
