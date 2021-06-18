const Discord = require ("discord.js")
const config = require("../config.json")
 
module.exports.run = async (bot, message, args) => {

  message.delete()

  message.channel.send("Link to the ShinyBot's guide :\nhttps://bit.ly/Guide-ShinyBot")

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(time + ' - Command ▸ guide')

}

module.exports.help = {
  name: "guide"
}
