import apollo from '../apollo'

// create a timer
// seconds
export const createTimer = (seconds) => {
  // generate id
  let _id = Random.id()

  return dispatch => {
    apollo.mutate({
      variables: {
        _id,
        seconds,
      },
      mutation: gql`
        mutation createTimer($seconds: Int!, $_id: String!) {
          createTimer(seconds: $seconds, _id: $_id) {
            _id
            seconds
          }
        }
      `,
      optimisticResponse: {
        __typename: 'Mutation',
        createTimer: {
          __typename: 'Timer',
         _id,
         seconds,
        }
      },
      resultBehaviors: [
       {
          type: 'ARRAY_INSERT',
          resultPath: [ 'createTimer' ],
          storePath: ['ROOT_QUERY', 'timers'],
          where: 'PREPEND',
        },
      ],
    })
  }
}
