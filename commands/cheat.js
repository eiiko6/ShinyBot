const Discord = require ("discord.js")
 
module.exports.run = async (bot, message, args) => {

  message.delete()

  let isBotOwner = message.author.id == '664587684282630174'

  if (!isBotOwner) return message.channel.send("🔐 Only the owner can use this command.")

  message.channel.send("résultat :" + guild . getJDA () . getGuilds () . size ())

}

module.exports.help = {
  name: "uezdiuzeudy23"
}
