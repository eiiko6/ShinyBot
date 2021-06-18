const Discord = require ("discord.js")
const config = require("../config.json")
 
module.exports.run = async (bot, message, args) => {

  message.delete()

  let isBotOwner = message.author.id == '664587684282630174'

  if (!isBotOwner) return message.channel.send("🔐 Only the bot's owner can use this command. Sorry ;(")

  message.channel.send('⚙ Rebooting...')
    await bot.destroy()
    await bot.login(config.token)
    await message.channel.send("✅ ShinyBot rebooted !")

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(time + ' - Command ▸ reboot')

}

module.exports.help = {
  name: "reboot"
}
