const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    message.delete()

    var moneyinfoEmbed = new Discord.MessageEmbed()
        .setColor("#57cdff")
        .setTitle("__Informations about ShinyBot's xp functionnality.__")
        .setDescription("ShinyBot has a pretty simple xp functionnality.")
        .addFields(
            { name: "Start", value: "You begin with **0** xp."},
            { name: "Earning", value: "You earn between **5** and **15** xp per message."},
            { name: "Profile", value: "Your xp is relative to ShinyBot, so inter-servers."},
        )
    message.channel.send(moneyinfoEmbed)

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + ' - Command ▸ xpinfo')
}

module.exports.help = {
    name: "xpinfo"
  }
