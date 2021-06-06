const Discord = require("discord.js");
const liens = [
    "https://media.giphy.com/media/10wfgzlX5CKzRe/giphy.gif",
    "https://media.giphy.com/media/WmjiOoGpuCDq8/giphy.gif",
    "https://media.giphy.com/media/jFNTzpnwahSwg/giphy.gif",
    "https://media.giphy.com/media/mEsOq022kLlDO/giphy.gif",
    "https://media.giphy.com/media/EAOTD2L0qyvhm/giphy.gif",
    "https://media.giphy.com/media/PdcTSy3CjZ5M4/giphy.gif",
    "https://media.giphy.com/media/R6JRG9Y8nrwPe/giphy.gif",
    "https://media.giphy.com/media/BS0d0FHVdrmeI/giphy.gif",
    "https://media.giphy.com/media/KztT2c4u8mYYUiMKdJ/giphy.gif",
    "https://media.giphy.com/media/xsE65jaPsUKUo/giphy.gif",
    "https://media.giphy.com/media/13AcmSNW5O7WV2/giphy.gif",
    "https://media.giphy.com/media/yXPquATCb8kGk/giphy.gif",
    "https://media.giphy.com/media/XdUr7e0X1Kjeg/giphy.gif",
    "https://media.giphy.com/media/l0MYD0wjKQ84goG6A/giphy.gif",
    "https://media.giphy.com/media/3o7bu2ptBhTiYHnG7K/giphy.gif",
    "https://media.giphy.com/media/yNSQNzNkb3rvW/giphy.gif",
    "https://media.giphy.com/media/yUDTcgXveugAU/giphy.gif",
    "https://media.giphy.com/media/aMvNJI0oTvNrW/giphy.gif",
    "https://media.giphy.com/media/3oKIPy2hjnheNraWwo/giphy.gif",
    "https://media.giphy.com/media/JxFmWGrmynlCg/giphy.gif",
    "https://media.giphy.com/media/iHmzGAgGlc9d6/giphy.gif",
    "https://media.giphy.com/media/f4V2mqvv0wT9m/giphy.gif",
    "https://media.giphy.com/media/xT4uQmy4Ta0eg1T7W0/giphy.gif",
    "https://media.giphy.com/media/H4KMgh8z9FkJyEkIWi/giphy.gif",
    "https://media.giphy.com/media/l0K4eeSXuiJTAx1Ti/giphy.gif"
]
 
module.exports.run = (bot, message, args) => {
 
    const lien = liens[Math.floor(Math.random() * liens.length)];
 
    let kawaïEmbed = new Discord.MessageEmbed()
    .setColor("#fdfd9e")
    .setTitle("Un petit GIF kawaï :")
    .setImage(lien)
    .setFooter("Source : https://giphy.com/gifs");
 
    message.channel.send(kawaïEmbed);
 
    message.delete();

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + ' - Command ▸ kawaï')

}

module.exports.help = {
    name: "kawaï"
}