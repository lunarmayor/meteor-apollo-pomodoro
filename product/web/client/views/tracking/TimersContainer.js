import React from 'react'
import { connect } from 'react-apollo'

const TimersContainer = ({ timerQuery }) => (
  timerQuery.loading ?
    <div>loading</div>
  :
    <div>
      { timerQuery.timers.map(timer => (
        <div>{timer.seconds}</div>
      ))}
    </div>
)

export default connect({
  mapQueriesToProps() {
    return {
      timerQuery: {
        query: gql`
          query getTimers {
            timers {
              _id
              seconds
            }
          }
        `
      }
    }
  }
})(TimersContainer)

