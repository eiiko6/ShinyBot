const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let inline = true
    let serverIcon = message.guild.iconURL;
    let serverEmbed = new Discord.MessageEmbed()
        .setColor("#e8fd34")
        .setThumbnail(serverIcon)
        .setAuthor(message.guild.name)
        .addField("Nom", message.guild.name, inline)
        .addField(":id: ID", message.guild.id, inline)
        .addField(":crown: Propriétaire", message.guild.owner, inline)
        .addField("🌏 Région", message.guild.region, inline)
        .addField("Nombre de membres",  `${message.guild.memberCount}`, inline)
        .addField("Tu as rejoint le rejoint le :", message.member.joinedAt)
        .setFooter(`Créé le ${message.guild.createdAt}`);

    message.channel.send(serverEmbed);

    message.delete();

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + ' - Command ▸ serverinfo')

}

module.exports.help = {
    name: "serverinfo"
}