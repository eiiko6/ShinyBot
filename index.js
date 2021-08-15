const Discord = require("discord.js")
const config = require("./config.json")
const bot = new Discord.Client();
const fs = require("fs");
const money = require("./money.json")
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 
  if(err) console.log(err);
 
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log(time + " - Files ▸ Commands not found");
    return;
  }
 
jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(time + ` - Files ▸ commande - ${f} - chargée`);
  bot.commands.set(props.help.name, props);
});
});


bot.on("ready", () => {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(time + " - Bot ▸ " + bot.user.username + " online")
});
 
bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === 'dm') return message.channel.send("My commands doesn't work in PM...\n**Try somewhere else !**")

  let content = message.content.split(" ");
  let command = content[0];
  let args = content.slice(1);
  let prefix = config.prefix;
 
 /*-  -  -  Economy  -  -  -*/
 
  let commandfile = bot.commands.get(command.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  if (!money[message.author.id]) {
    money[message.author.id] = {
      money: 0
    }
  }

  let startMoney = 0;
  let addMoney = Math.floor(Math.random() * 15) + 5;

  money[message.author.id] = {
    money: money[message.author.id].money + addMoney
  }

  fs.writeFile('./money.json', JSON.stringify(money), err => {
    if (err) console.log(err);
  })

})

/*Statut -----------------------------------------------------------------------------------------*/
 
var servers = bot.guilds.cache.size

var jeuxs = [
  `| Dev : Mxstoto#1405 |`,
  `| Start with s/help |`,
  `| Currently on v1.8 |`,]
 
setInterval(function () {
 
 var jeux = jeuxs[Math.floor(Math.random() * jeuxs.length)];
 
 bot.user.setActivity(jeux, { type: 'PLAYING' });

 var today = new Date();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 console.log(time + ' - Bot ▸ changed activity to ' + jeux)
}, 5000)
 
 
bot.login(config.token)

/*Auto-réactions ---------------------------------------------------------------------------------*/

bot.on('message', message => {
  if (message.content === 'hello') {
		message.react('👋')
  }
  if (message.content === 'bye') {
		message.react('👋')
  }
  if (message.content === 'cool') {
		message.react('👍')
  }
  if (message.content === 'super') {
		message.react('👍')
  }
  if (message.content === 'yes') {
		message.react('✅')
  }
  if (message.content === 'no') {
		message.react('❌')
  }
  if (message.content === 'ok') {
		message.react('✅')
  }
})
