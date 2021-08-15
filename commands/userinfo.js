const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "Online",
        idle: "Inactive",
        dnd: " Do not disturb",
        offline: " Offline/Invisible"
    }
    let mentionedUser = message.mentions.users.first() || message.author;

    const member = message.mentions.members.first() || message.member;
    let target = message.mentions.users.first() || message.author

    if (member.user.bot === true) {
        bot = "Oui";
    } else {
        bot = "Non";
    }


    let userEmbed = new Discord.MessageEmbed()
        .setAuthor(member.user.username)
        .setThumbnail((target.displayAvatarURL))
        .setColor("#fd84f3")
        .addField("🤙 Nickname", `${member.user.tag}`, inline)
        .addField(":id: ID", member.user.id, inline)
        .addField("👾 Bot ? ", `${bot}`, inline, true)
        .addField("Status", `${status[member.user.presence.status]}`, inline, true)
        .addField("🎮 Playing at ", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Not playing"}`, inline, true)
        .addField("📅 Arrival on Discord ", moment(member.user.createdAt).format("LL"), true)
        .setFooter(`Informations about ${member.user.username}`)
        .setThumbnail(mentionedUser.displayAvatarURL)

    message.channel.send(userEmbed);

    message.delete();

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + ' - Command ▸ userinfo')
}

module.exports.help = {
    name: "userinfo"
}
