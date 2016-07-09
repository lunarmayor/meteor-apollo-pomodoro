Meteor.startup(() => {
  ServiceConfiguration.configurations.remove({
    service: 'google',
  })

  ServiceConfiguration.configurations.insert({
    service: 'google',
    clientId: Meteor.settings.GOOGLE_CLIENT_ID,
    secret: Meteor.settings.GOOGLE_CLIENT_SECRET,
  })
})
