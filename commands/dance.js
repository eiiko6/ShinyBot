const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {
  message.delete().catch(console.error);

  message.channel.send("~(^-^)~")
    .then(message => {
        message.edit("(~^-^)~");
        message.edit("~(^-^~)");
        message.edit("(~^-^)~");
        message.edit("~(^-^~)");
        message.edit("~(^-^)~");
    })

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(time + ' - Command ▸ dance')

}

module.exports.help = {
  name: "dance"
}