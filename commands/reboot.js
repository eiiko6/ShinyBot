const Discord = require ("discord.js")
const config = require("../config.json")
 
module.exports.run = async (bot, message, args) => {

  message.delete()

  let isBotOwner = message.author.id == '664587684282630174'

  if (!isBotOwner) return message.channel.send("🔐 Seul le propriétaire du bot peut utiliser cette commande.")

  message.channel.send('⚙ Redémarage en cours...')
    await bot.destroy()
    await bot.login(config.token)
    await message.channel.send("✅ ShinyBot redémarré !")

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(time + ' - Command ▸ reboot')

}

module.exports.help = {
  name: "reboot"
}