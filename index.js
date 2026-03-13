const mineflayer = require('mineflayer')

function startBot() {

  const bot = mineflayer.createBot({
    host: 'voidmcnetwork.falixsrv.me',
    port: 28350,
    username: 'ServerKBot56',
    auth: 'offline'
  })

  bot.on('spawn', () => {
    console.log("Bot joined server")

    setTimeout(() => {
      bot.chat("/register botpass botpass")
      bot.chat("/login botpass")
    }, 4000)

    // anti AFK
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 30000)
  })

  bot.on('end', () => {
    console.log("Disconnected. Reconnecting...")
    setTimeout(startBot, 15000)
  })

}

startBot()
