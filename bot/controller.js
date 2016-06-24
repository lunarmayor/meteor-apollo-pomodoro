import TwilioSMSBot from 'botkit-sms'
import ddp from './ddp'

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

controller.hears('.*', 'message_received', (bot, message) => {
  ddp.call('submitResponse', [{ body: message.text, sms: true, phone: message.channel }], (err, response) => {
    bot.reply(message, { text: response })
  })
})


export default controller
