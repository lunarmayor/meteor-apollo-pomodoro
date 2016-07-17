import React from 'react'
import ActionButtons from './ActionButtons'
import CurrentTimer from './CurrentTimer'
import TimersContainer from './TimersContainer'

const TrackerView = ({ currentUser }) => (
  <div>
    <ActionButtons/>
    <CurrentTimer/>
    <TimersContainer/>
  </div>
)

export default TrackerView
