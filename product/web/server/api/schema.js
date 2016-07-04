export const schema = [`
type Email {
  address: String
  verified: Boolean
}

type User {
  emails: [Email]
  randomString: String
}

type Query {
  user(id: String!): User
}

schema {
  query: Query
}
`];

export const resolvers = {
  Query: {
    async user(root, args, context) {
      console.log(Meteor.users.findOne(context.userId))
      return await Meteor.users.findOne(context.userId);
    },
  },
  User: {
    emails: ({ emails }) => emails,
    randomString: () => 'asdfasdf',
  }
}
