const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(":x: Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send(":x: Veuillez mentionner un utilisateur")
       if (!member.bannable) return message.channel.send(":x: Je ne peut pas exclure cet utilisateur.")
       message.guild.ban(member, {days: 7})
       message.delete();
       message.channel.send('**' + member.user.username + '** a été exclu :white_check_mark:')

       var today = new Date();
       var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
       console.log(time + ' - Command ▸ kick')
}
 
module.exports.help = {
    name: "kick"
}