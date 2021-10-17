const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(":x: You don't have the permission to execute this command ;(")
       const args = message.content.slice(prefix.length).trim().split(/ +/g);
       const command = args.shift().toLowerCase();
       let days = args.slice(1).join(" ");
       let member = message.mentions.members.first()
       if (!member) return message.channel.send(":x: Please, mentions an user.")
       if (!member.bannable) return message.channel.send(":x: I can't ban this one.")
       message.guild.ban(member, {days: days})
       message.delete();
       message.channel.send('**' + member.user.username + '** was banned succesfully :white_check_mark:')

       var today = new Date();
       var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
       console.log(time + ' - Command ▸ ban')
}
 
module.exports.help = {
    name: "ban"
}
