const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu n'as pas la permission d'utiliser cette commande");
    if (!args[0]) return message.channel.send("Indiques un nombre");
    if (args[0] < 1 || args[0] > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")

    message.delete()
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${args[0]} messages ont été supprimés`).then(msg => msg.delete(5000))

        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(time + ' - Command ▸ clear')
    });
}

module.exports.help = {
    name: "clear"
}