import { createApolloServer } from 'meteor/apollo'
import { schema, resolvers } from './api'

createApolloServer({
  schema,
  resolvers,
  graphql: true,
  pretty: true,
})

Accounts._options.sendPhoneVerificationCodeOnCreation = true
//SMS.twilio = {
//  FROM: '+19782245119',
//  ACCOUNT_SID: 'AC8db1f551f828af01e00edef4919de64f',
//  AUTH_TOKEN: '5ced72aba0247a47da769d339d272411',
//}
