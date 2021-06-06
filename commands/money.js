const Discord = require("discord.js")
const money = require("../money.json")
 
module.exports.run = async (bot, message, args) => {

    message.delete()

    if (!money[message.author.id]) {
        money[message.author.id] = {
          money: 0
        }
    }

    let userMoney = money[message.author.id].money;

    var moneyEmbed = new Discord.MessageEmbed()
        .setColor("#55ff9c")
        .setAuthor("💰| " + message.author.username + " |💰")
        .setDescription("⠂" + userMoney + " xp")

    message.channel.send(moneyEmbed)

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + ' - Command ▸ xp')
}

module.exports.help = {
    name: "xp"
  }