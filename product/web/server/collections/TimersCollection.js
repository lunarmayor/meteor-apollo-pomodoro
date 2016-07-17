const { Collection } = Mongo

class TimersCollection extends Collection {
  constructor(name) {
    super(name)
  }

  async create(data, options = {}) {
    this.insert(
      Object.assign(data, {
        createdAt: new Date(),
        ended: false,
      })
    )

    return await this.findOne(data._id)
  }
}

export default new TimersCollection('timers')
