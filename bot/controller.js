import TwilioSMSBot from 'botkit-sms'
import dictionary from './dictionary'

const controller = TwilioSMSBot({
  account_sid: process.env.TWILIO_ACCOUNT_SID,
  auth_token: process.env.TWILIO_AUTH_TOKEN,
  twilio_number: process.env.TWILIO_PHONE
})

const bot = controller.spawn({})
const port = process.env.PROD ? process.env.PORT : 4000

controller.setupWebserver(port, (err, webserver) => {
  controller.createWebhookEndpoints(controller.webserver, bot, () => {
    console.log('started')
  })
})

const tempQuestions = [
  { question: 'Are you a trump supporter?' },
  { question: 'Do you believe in god?' },
  { question: 'Do you exercise?' },
  { question: 'Do you like dogs?' },
]

const nextQuestion = (convo, bot, questions, index) => {
  if (questions[index + 1]) {
    askQuestion(convo, bot, questions, index + 1)
  } else {
    convo.say(dictionary.results)
  }
}

const askQuestion = (convo, bot, questions, index = 0) => {
  convo.ask(questions[index].question, [
    {
      pattern: bot.utterances.yes,
      callback(response, convo) {
        nextQuestion(convo, bot, questions, index)
        convo.next()
      }
    },
    {
      pattern: bot.utterances.no,
      callback(response, convo) {
        nextQuestion(convo, bot, questions, index)
        convo.next()
      }
    },
    {
      default: true,
      callback(response, convo) {
        convo.repeat()
        convo.next()
      }
    }
  ])
}

controller.hears('hi', 'message_received', (bot, message) => {
  bot.startConversation(message, (err, convo) => {
    convo.say(dictionary.introduction)
    convo.say(dictionary.explanation)
    askQuestion(convo, bot, tempQuestions)
  })
})

export default controller
