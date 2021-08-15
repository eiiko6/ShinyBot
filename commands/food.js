const Discord = require("discord.js");
const liens = [
    ":ice_cream:",
    ":shaved_ice:",
    ":icecream:",
    ":doughnut:",
    ":cake:",
    ":cookie:",
    ":chocolate_bar:",
    ":candy:",
    ":lollipop:",
    ":custard:",
    ":honey_pot:",
    ":cooking:",
    ":hamburger:",
    ":fries:",
    ":spaghetti:",
    ":pizza:",
    ":meat_on_bone:",
    ":poultry_leg:",
    ":fried_shrimp:",
    ":sushi:",
    ":bento:",
    ":bread:",
    ":ramen:",
    ":rice_ball:",
    ":rice:",
    ":curry:",
    ":stew:",
    ":fish_cake:",
    ":oden:",
    ":dango:",
    ":rice_cracker:",
    ":sweet_potato:",
    ":banana::apple:",
    ":green_apple:",
    ":tangerine:",
    ":lemon:",
    ":mushroom:",
    ":tomato:",
    ":eggplant:",
    ":grapes:",
    ":melon:",
    ":watermelon:",
    ":pear:",
    ":peach:",
    ":cherries:",
    ":strawberry:",
    ":pineapple:",
    ":chestnut:",
    ":corn:"
]
 
module.exports.run = (bot, message, args) => {
 
    const lien = liens[Math.floor(Math.random() * liens.length)];
 
    let foodEmbed = new Discord.MessageEmbed()
    .setColor("#cce034")
    .setTitle("Some food for you :")
    .setDescription(lien)
    .setFooter("Chosen randomly.");
 
    message.channel.send(foodEmbed);
 
    message.delete();
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + ' - Command ▸ food')
  
}

module.exports.help = {
    name: "food"
}
