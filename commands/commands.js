const Discord = require ("discord.js");

 
module.exports.run = async (bot, message, args) => {
  message.delete().catch(console.error);

    const member = message.mentions.members.first() || message.member;
      let target = message.mentions.users.first() || message.author


    const user = bot.users.cache.get(member.user.id)
    var helpEmbed = new Discord.MessageEmbed()
    .setAuthor("Commands list", bot.user.avatarURL)
    .setTitle("-  -  -  -  -  -  -  -  -  -  -")
    .setColor("#95ff00")
    .addFields(
        { name: 'help', value: 'Bot informations.' },
        { name: 'commands', value: 'Commands list.' },
        { name: 'moneyinfo', value: "Xp functionality informations." },
        { name: 'kick', value: 'Kicks the mentionned user.'  },
        { name: 'ban', value: 'Bans the mentionned user.' },
        { name: 'dance', value: 'A simple dance animation.' },
        { name: 'kawaï', value: 'Picks a kawaï gif between 25.' },
        { name: 'clear', value: 'Delete some messages.' },
        { name: 'say', value: 'Do the bot speak for you !' },
        { name: 'userinfo', value: 'Informations of an user.' },
        { name: 'serverinfo', value: 'nformations of the server.' },
        { name: 'survey', value: 'Starts a survey.' },
        { name: 'money', value: "Gives the value of xp that you have." },
    )
      .setFooter("Prefix : s/")

    message.channel.send("<@" + member.user.id + "> I sent you the commands list in PM.")
    user.send(helpEmbed)

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + ' - Command ▸ commands')
}
module.exports.help = {
  name: "commands"
}
