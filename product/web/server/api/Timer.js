import TimersCollection from '../collections/TimersCollection'

const description = `
### Timer
`

export const TimerSchema = `
  type Timer {
    _id: String
    ended: Boolean
    currentTimer: Boolean
    seconds: Int
    secondsLeft: Int
    createdAt: String
    userId: String
    __description: String
  }
`

export const TimerResolver = {
  Timer: {
    currentTimer: ({ _id }) => !_id,
    __description: () => description,

  }
}

export const TimerMutations = {
  async createTimer(root, { seconds, _id }, { userId }) {
    return await TimersCollection.create({
      seconds,
      _id,
      userId,
      secondsLeft: seconds,
    })
  }
}

export const TimerQueries = {
  async timers(root, args, { userId }) {
    return await TimersCollection.find({ userId }).fetch()
  }
}
