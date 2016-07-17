import React from 'react'
import Distribute from '../../ui/layouts/Distribute'
import IconButton from '../../ui/shared/IconButton'
import { createTimer } from '../../actions/timers'
import { connect } from 'react-apollo'

const POMODORO = 1500
const SHORT_BREAK = 300
const LONG_BREAK = 3000

const ActionButtons = ({ createTimer }) => (
  <Distribute padding='md'>
    <IconButton
      onClick={() => createTimer(POMODORO)}
      icon="rocket"
      label="Pomodoro"
    />
    <IconButton
      onClick={() => createTimer(SHORT_BREAK)}
      icon="rocket"
      label="Short Break"
    />
    <IconButton
      onClick={() => createTimer(LONG_BREAK)}
      icon="rocket"
      label="Long Break"
    />
  </Distribute>
)

export default connect({
  mapDispatchToProps: {
    createTimer
  }
})(ActionButtons)
