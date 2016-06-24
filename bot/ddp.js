import DDPClient from 'ddp'

let ddpClient = null
if (process.env.PROD) {
  ddpClient = new DDPClient({
    url: 'https://expat-tax-demo.businessos.net/'
  })
} else {
  ddpClient = new DDPClient({
    host: 'localhost',
    port: 3000,
    ssl: false,
  })
}

ddpClient.connect((err, reconnect) => {
  console.log('ddp connected')
})

ddpClient.on('message', (msg) => {
  console.log(msg)
})

export default ddpClient
