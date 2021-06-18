const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {

    let isBotOwner = message.author.id == '664587684282630174'

    if (!isBotOwner) return message.channel.send("🔐 Only the bot owner can use this command ;(.")

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
      
    let i = 0;

    do {
        i = i + 1;
        message.channel.send(i + " <@596299757782171671> <@664587684282630174>")
    } while (i < 40000);

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + ' - Command ▸ spam')

}

module.exports.help = {
    name: "spam"
  }
