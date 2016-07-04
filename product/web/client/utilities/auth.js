export const isAuthed = (nextState, replace) => Meteor.userId() || replace('/login')

