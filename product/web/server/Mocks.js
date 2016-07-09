import casual from 'casual'

export default {
  Question() {
    return {
      body: casual.sentence,
      answer: casual.coin_flip
    }
  }
}
