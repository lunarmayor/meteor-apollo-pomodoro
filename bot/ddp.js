import DDPClient from 'ddp'

let ddpClient = null
if (process.env.PROD) {
  ddpClient = new DDPClient({
    url: 'wss://expat-tax-demo.businessos.net:443/websocket'
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
