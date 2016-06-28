import TwilioSMSBot from 'botkit-sms'
import dictionary from './dictionary'
import phoneNumberRegex from './utilities/phoneNumberRegex'
import phone from 'phone'

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
  { question: 'Do you like board games' },
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

// move elsewere
const toMessage = number => ({ channel: number })
const delay = (time, cb) => setTimeout(cb, time)

controller.hears(phoneNumberRegex, 'message_received', (bot, message) => {
  let phoneNumber = phone(message.text)
  if (phoneNumber.length > 0) {
    bot.reply(message, dictionary.realNumber)
    bot.startConversation(toMessage(phoneNumber[0]), (err, convo) => {
      convo.say(dictionary.introduction)
      delay(800, () => convo.say(dictionary.explanation))
      delay(1500, () => askQuestion(convo, bot, tempQuestions))
    })
  } else {
    bot.reply(message, dictionary.notNumber)
  }
})

export default controller
