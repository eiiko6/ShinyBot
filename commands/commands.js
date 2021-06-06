const Discord = require ("discord.js");

 
module.exports.run = async (bot, message, args) => {
  message.delete().catch(console.error);

    const member = message.mentions.members.first() || message.member;
      let target = message.mentions.users.first() || message.author


    const user = bot.users.cache.get(member.user.id)
    var helpEmbed = new Discord.MessageEmbed()
    .setAuthor("Liste des commandes", bot.user.avatarURL)
    .setTitle("-  -  -  -  -  -  -  -  -  -  -")
    .setColor("#95ff00")
    .addFields(
        { name: 'help', value: 'Informations sur le bot.' },
        { name: 'commands', value: 'Liste des commandes.' },
        { name: 'moneyinfo', value: "Informations sur le système d'économie" },
        { name: 'kick', value: 'Exclu le membre mentionné.'  },
        { name: 'ban', value: 'Banni le membre mentionné.' },
        { name: 'dance', value: 'Petite animation de danse.' },
        { name: 'kawaï', value: 'Un GIF kawaï parmi 25 présélectionnés.' },
        { name: 'clear', value: 'Supprimer des messages.' },
        { name: 'say', value: 'Faire parler le bot.' },
        { name: 'userinfo', value: 'Informations sur un utilisateur.' },
        { name: 'serverinfo', value: 'Informations sur le serveur.' },
        { name: 'survey', value: 'Lance un sondage.' },
        { name: 'moneyinfo', value: "Informations sur le système d'économie." },
        { name: 'money', value: "Donne la valeur de l'argent de l'utilisateur." },
        { name: 'time', value: "Donne l'heure et la date." },
    )
      .setFooter("Préfix : s/")

    message.channel.send("<@" + member.user.id + "> Je t'ai envoyé le liste des commandes en message privé.")
    user.send(helpEmbed)

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + ' - Command ▸ commands')
}
module.exports.help = {
  name: "commands"
}