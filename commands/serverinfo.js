const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let inline = true
    let serverIcon = message.guild.iconURL;
    let serverEmbed = new Discord.MessageEmbed()
        .setColor("#e8fd34")
        .setThumbnail(serverIcon)
        .setAuthor(message.guild.name)
        .addField("Name", message.guild.name, inline)
        .addField(":id: ID", message.guild.id, inline)
        .addField(":crown: Owner", message.guild.owner, inline)
        .addField("🌏 Region", message.guild.region, inline)
        .addField("Member's number",  `${message.guild.memberCount}`, inline)
        .addField("You joined at :", message.member.joinedAt)
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
