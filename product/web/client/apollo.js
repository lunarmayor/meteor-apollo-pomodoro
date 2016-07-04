import ApolloClient from 'apollo-client'
import { meteorClientConfig } from 'meteor/apollo'
import gql from 'graphql-tag'

const client = new ApolloClient(meteorClientConfig())

window['gql'] = gql
export default client
