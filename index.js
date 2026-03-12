const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'voidmcnetwork.falixsrv.me',
  port: 28350,
  username: 'AFK_Bot'
})

bot.on('spawn', () => {
  console.log('Bot joined server')
})
