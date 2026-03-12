const mineflayer = require('mineflayer')

function startBot() {

  const bot = mineflayer.createBot({
    host: 'voidmcnetwork.falixsrv.me',
    port: 28350,
    username: 'ServerBot69',
    auth: 'offline' // remove if your server is premium
  })

  bot.on('spawn', () => {
    console.log('Bot joined the server')

    // Anti-AFK jump every 30 seconds
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 30000)
  })

  bot.on('end', () => {
    console.log('Bot disconnected. Reconnecting in 15 seconds...')
    setTimeout(startBot, 15000)
  })

  bot.on('error', (err) => {
    console.log('Error:', err)
  })
}

startBot()
