import casual from 'casual'
import faker from 'faker'
const { random } = faker

export default {
  Timer: () => ({
    _id: random.uuid(),
    createdAt: new Date(),
    ended: false,
    currentTimer: false,
  }),
}
