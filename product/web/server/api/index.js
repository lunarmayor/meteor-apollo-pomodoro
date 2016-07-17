import { UserQueries, UserSchema, UserResolver } from './User'
import { TimerQueries, TimerMutations, TimerSchema } from './Timer'

export const resolvers = {
  Query: {
    ...UserQueries,
    ...TimerQueries,
  },
  Mutation: {
    ...TimerMutations,
  },
  ...UserResolver
}

const RootSchema = `
  type Query {
    me: User
    users: [User]
    timers: [Timer]
  }

  type Mutation {
    createTimer(
      seconds: Int!
      _id: String!
    ): Timer
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

export const schema = [
  RootSchema,
  UserSchema,
  TimerSchema,
]

export const mocks = {
}

