const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {
  message.delete().catch(console.error);
  
    message.channel.send(`Currently in ${bot.guilds.cache.size} servers.`)

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + ' - Command ▸ help')
}
module.exports.help = {
  name: "servnumber"
}
