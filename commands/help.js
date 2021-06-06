const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {
  message.delete().catch(console.error);

 
    var helpEmbed = new Discord.MessageEmbed()
    .setTitle("__Informations sur ShinyBot__")
    .setColor("#57cdff")
    .addField('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -', 'ShinyBot est un bot multi-fonctions (modération, utilitaire, fun, etc...).')
    .addField('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -', 'Il possède un filtre de mots vulgaires assez complet.')
    .addField('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -', 'Il a aussi une grande liste de réactions (Bonjour, salut, oui, à+, etc...).')
    .addField('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -', 'Codé par Mxstoto#1405.')
    .addFields(
        { name: '-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -', value: 'Préfix : `s/`' },
        { name: '-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -', value: 'Langage : `Java Script`' },
        { name: '-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -', value: 'Ping moyen : `192 ms`'  },
    )
    .addField('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -', '`s/commands` pour la liste des commandes disponibles.')
    .addField('-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -', "`s/moneyinfo` pour des informations sur le système d'économie.")
    message.channel.send(helpEmbed)

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + ' - Command ▸ help')
}
module.exports.help = {
  name: "help"
}