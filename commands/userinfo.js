const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "En ligne",
        idle: "Inactif",
        dnd: " Ne pas dérenger",
        offline: " Hors-Ligne/Invisble"
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
        .addField("🤙 Pseudo", `${member.user.tag}`, inline)
        .addField(":id: ID", member.user.id, inline)
        .addField("👾 Bot ", `${bot}`, inline, true)
        .addField("Statut", `${status[member.user.presence.status]}`, inline, true)
        .addField("🎮 Joue à", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Ne joue pas"}`, inline, true)
        .addField("📅 Inscription sur Discord", moment(member.user.createdAt).format("LL"), true)
        .setFooter(`Informations sur ${member.user.username}`)
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