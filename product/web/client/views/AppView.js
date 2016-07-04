import React from 'react'
import { connect } from 'react-apollo';
import { createContainer } from 'meteor/react-meteor-data'
import { FillParent } from '../ui/layouts'

const AppView = ({ children, currentUser }) => (
  <FillParent>
    {React.cloneElement(children, { currentUser })}
  </FillParent>
)

const AppViewWithData = connect({
  mapQueriesToProps({ ownProps }) {
    if (ownProps.userId) {
      return {
        currentUser: {
          query: gql`
            query getUserData ($id: String!) {
              user(id: $id) {
                emails {
                  address
                  verified
                }
                isVerified
                randomString
              }
            }
          `,
          variables: {
            id: ownProps.userId,
          },
        }
      }
    }
  }
})(AppView)

const AppWithUserId = createContainer(() => {
  return {
    userId: Meteor.userId(),
  }
}, AppViewWithData)

export default AppWithUserId
