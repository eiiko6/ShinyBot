const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the permission to use this command.");
    if (!args[0]) return message.channel.send("Indiques un nombre");
    if (args[0] < 1 || args[0] > 100) return message.channel.send("Please, enter a number between 0 and 100.")

    message.delete()
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${args[0]} messages was deleted !`).then(msg => msg.delete(5000))

        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(time + ' - Command ▸ clear')
    });
}

module.exports.help = {
    name: "clear"
}
