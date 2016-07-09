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
  mapQueriesToProps() {
    return {
      currentUser: {
        query: gql`
          query getUserData {
            me {
              phoneNumber
              emails {
                address
                verified
              }
              isVerified
            }
          }
        `,
        pollInterval: 1000,
      }
    }
  }
})(AppView)

export default AppViewWithData
