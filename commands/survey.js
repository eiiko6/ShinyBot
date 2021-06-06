const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    const member = message.mentions.members.first() || message.member;
    let target = message.mentions.users.first() || message.author

        var text = message.content.split(' ').slice(1).join(' ')
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(":x: Vous n'avez pas la permission d'utiliser cette commande")
        if(!text) return message.channel.send(':x: Veuillez indiquer du texte')

         let surveyEmbed = new Discord.MessageEmbed()
         .setColor("#ff7b2c")
        .setTitle("__-                 Sondage                 -__")
        .setDescription(text)
        .addField('✅ Pour | ❌ Contre | 🏳 Neutre', '-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -')
        .setFooter(`Proposé par ${member.user.username}`)

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