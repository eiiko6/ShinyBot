const Discord = require("discord.js");
const liens = [
    ":dog2:",
    ":poodle:",
    ":cat2:",
    ":rat:",
    ":turtle:",
    ":rabbit2:",
    ":rooster:",
    ":baby_chick:",
    ":sheep:",
    ":ox:",
    ":boar:",
    ":pig2:",
    ":snake:",
    ":elephant:",
    ":monkey:",
    ":leopard:",
    ":whale:",
    ":fish:",
    ":octopus:",
    ":bug:",
    ":bee:",
    ":ant:"
]
 
module.exports.run = (bot, message, args) => {
 
    const lien = liens[Math.floor(Math.random() * liens.length)];
 
    let petEmbed = new Discord.MessageEmbed()
    .setColor("#85521e")
    .setTitle("A pet for you :")
    .setDescription(lien)
    .setFooter("Chosen randomly.");
 
    message.channel.send(petEmbed);
 
    message.delete();
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + ' - Command ▸ pet')
  
}

module.exports.help = {
    name: "pet"
}
