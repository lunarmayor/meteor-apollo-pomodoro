export const isAuthed = (nextState, replace) => Meteor.userId() || replace('/login')
export const isLoggedIn = (nextState, replace) => Meteor.userId() && replace('/')
