const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {

  message.delete()

    var roroEmbed = new Discord.MessageEmbed()
    .setColor("#ff0101")
        .setDescription("__**Un sondage qui tient beaucoup à certains :**__")
        .addFields(
            { name: "Pour **Xbox**", value :"Votez <:Xbox_logo:722890217035399259>"},
            { name: "Pour **PlayStation**", value :"Votez <:PlayStation_logo:722890294999253042>"}
        )
    message.channel.send(roroEmbed)
            message.react("🏳")

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(time + ' - Command ▸ embed spé')

}

module.exports.help = {
  name: "embedpourroro-255AbT5g9"
}