const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {

    message.delete().catch(console.error);

    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    var time = today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds();

    var timeEmbed = new Discord.MessageEmbed()
        .setColor("#880101")
        .setTitle("__**Date et heure actuelles**__")
        .setDescription("📅 | **" + date + "**\n⌚ | **" + time + "**")
        .setFooter("Ding Dong !")
    
    message.channel.send(timeEmbed)

    console.log(time + ' - Command ▸ time')

}

module.exports.help = {
    name: "time"
  }