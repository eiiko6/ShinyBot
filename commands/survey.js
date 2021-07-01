const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    const member = message.mentions.members.first() || message.member;
    let target = message.mentions.users.first() || message.author

        var text = message.content.split(' ').slice(1).join(' ')
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(":x: You don't have the permission to execute this command.")
        if(!text) return message.channel.send(':x: Please, type something...')

         let surveyEmbed = new Discord.MessageEmbed()
         .setColor("#ff7b2c")
        .setTitle("__-                 Survey                 -__")
        .setDescription(text)
        .addField('✅ Yes | ❌ No | 🏳 IDK', '-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -')
        .setFooter(`Sended by ${member.user.username}`)

        message.channel.send(surveyEmbed)
            .then(function (message) {
                message.react("✅")
                message.react("❌")
                message.react("🏳")
            })
    message.delete()

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + ' - Command ▸ survey')
}

module.exports.help = {
    name: "survey"
  }
