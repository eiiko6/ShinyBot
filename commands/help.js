const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {
  message.delete().catch(console.error);

 
    var helpEmbed = new Discord.MessageEmbed()
    .setTitle("__ShinyBot's informations__")
    .setColor("#57cdff")
    .addField('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -', 'ShinyBot is a multi-function bot (moderating, utility, fun, etc...).')
        .addField('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -', 'He has more than 15 amazing commands !')
    .addField('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -', 'Developed by Mxstoto#1405.')
    .addFields(
        { name: '-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -', value: 'Prefix : `s/`' },
        { name: '-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -', value: 'Language : `Java Script`' },
    )
    .addField('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -', '`s/commands` for the command list.')
    .addField('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -', "`s/moneyinfo` for some informations about the xp system.")
    message.channel.send(helpEmbed)

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + ' - Command ▸ help')
}
module.exports.help = {
  name: "help"
}
