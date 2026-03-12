const mineflayer = require('mineflayer')

function createBot() {

  const bot = mineflayer.createBot({
    host: 'voidmcnetwork.falixsrv.me',
    port: 28350,
    username: 'ServerBot67'
  })

  bot.on('spawn', () => {
    console.log('Bot joined server')
  })

  bot.on('end', () => {
    console.log('Bot disconnected, reconnecting...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', err => console.log(err))
}

createBot()
