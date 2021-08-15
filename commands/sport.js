const Discord = require("discord.js");
const liens = [
    ":baseball:",
    ":golf:",
    ":tennis:",
    ":soccer:",
    ":ski:",
    "",
    ":basketball:",
    ":snowboarder:",
    ":person_running:",
    ":person_surfing:",
    ":trophy:",
    ":horse_racing:",
    ":racehorse:",
    ":football:",
    ":rugby_football:",
    ":person_swimming:"
]
 
module.exports.run = (bot, message, args) => {
 
    const lien = liens[Math.floor(Math.random() * liens.length)];
 
    let sportEmbed = new Discord.MessageEmbed()
    .setColor("#e83c8c")
    .setTitle("A sport for you :")
    .setDescription(lien)
    .setFooter("Chosen randomly.");
 
    message.channel.send(sportEmbed);
 
    message.delete();
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + ' - Command ▸ sport')
  
}

module.exports.help = {
    name: "sport"
}
