const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'voidmcnetwork.falixsrv.me',
  port: 28350,
  username: 'ServerBot1'
})

const password = "afkbot"

bot.on('spawn', () => {
  console.log("Bot joined")

  setTimeout(() => {
    bot.chat(`/login ${password}`)
  }, 4000)
})

bot.on('messagestr', (msg) => {

  if (msg.includes("register")) {
    bot.chat(`/register ${password} ${password}`)
  }

  if (msg.includes("login")) {
    bot.chat(`/login ${password}`)
  }

})
