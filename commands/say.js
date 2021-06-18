const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    message.delete().catch(console.error);
        var text = message.content.split(' ').slice(1).join(' ')
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(":x: You don't have the permessions to execute this command ;(")
        if(!text) return message.channel.send(':x: Please, type something after `s/say`.')
         message.channel.send(text)

         var today = new Date();
         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
         console.log(time + ' - Command ▸ say')
}

module.exports.help = {
    name: "say"
  }
