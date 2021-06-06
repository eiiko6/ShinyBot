const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    message.delete()

    var moneyinfoEmbed = new Discord.MessageEmbed()
        .setColor("#57cdff")
        .setTitle("__Informations sur le système d'xp de ShinyBot__")
        .setDescription("ShinyBot possède un système d'xp extrèmement simple.")
        .addFields(
            { name: "Départ", value: "Vous commençez avec **0** xp."},
            { name: "Gains", value: "Vous gagnez entre **5** et **15** xp par message."},
            { name: "Profil", value: "Votre xp est relatif à ShinyBot, donc inter-serveurs."},
        )
    message.channel.send(moneyinfoEmbed)

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + ' - Command ▸ xpinfo')
}

module.exports.help = {
    name: "xpinfo"
  }