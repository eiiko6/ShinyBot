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
    console.log(time + " - Files ▸ Aucune commande trouvée");
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
  console.log(time + " - Bot ▸ " + bot.user.username + " en ligne")
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
 
var jeuxs = [
  `| ${bot. guilds. cache. size} servers |`,
  `| Dev : Mxstoto#1405 |`,
  `| s/help |`,]
 
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
/*-------------------------------------    👋 */
if (message.content === 'salut') {
		message.react('👋')
  }
  if (message.content === 'slt') {
		message.react('👋')
  }
  if (message.content === 'bonjour') {
		message.react('👋')
  }
  if (message.content === 'coucou') {
		message.react('👋')
  }
  if (message.content === 'au revoir') {
		message.react('👋')
  }
  if (message.content === 'a+') {
		message.react('👋')
  }
  if (message.content === 'à+') {
		message.react('👋')
  }
/*-------------------------------------       👍 */
  if (message.content === 'cool') {
		message.react('👍')
  }
  if (message.content === 'super') {
		message.react('👍')
  }
/*-------------------------------------       👎 */
  if (message.content === 'nul') {
		message.react('👎')
  }
/*-------------------------------------   ✅ ❌ */
  if (message.content === 'oui') {
		message.react('✅')
  }
  if (message.content === 'non') {
		message.react('❌')
  }
  if (message.content === 'ok') {
		message.react('✅')
  }
})

/*Filtre de mots ---------------------------------------------------------------------------------*/

bot.on('message', message => {
  if (message.content === 'putain') {
    const member = message.mentions.members.first() || message.member;
      let target = message.mentions.users.first() || message.author
    message.channel.send("<@" + member.user.id + "> Attention à ton langage")
    message.delete()
  }
})

bot.on('message', message => {
  if (message.content === 'merde') {
    const member = message.mentions.members.first() || message.member;
      let target = message.mentions.users.first() || message.author
    message.channel.send("<@" + member.user.id + "> Attention à ton langage")
    message.delete()
  }
})

bot.on('message', message => {
  if (message.content === 'bite') {
    const member = message.mentions.members.first() || message.member;
      let target = message.mentions.users.first() || message.author
    message.channel.send("<@" + member.user.id + "> Attention à ton langage")
    message.delete()
  }
})

bot.on('message', message => {
  if (message.content === 'tg') {
    const member = message.mentions.members.first() || message.member;
      let target = message.mentions.users.first() || message.author
    message.channel.send("<@" + member.user.id + "> Attention à ton langage")
    message.delete()
  }
})

bot.on('message', message => {
  if (message.content === 'ta geule') {
    const member = message.mentions.members.first() || message.member;
      let target = message.mentions.users.first() || message.author
    message.channel.send("<@" + member.user.id + "> Attention à ton langage")
    message.delete()
  }
})

bot.on('message', message => {
  if (message.content === 'fils de pute') {
    const member = message.mentions.members.first() || message.member;
      let target = message.mentions.users.first() || message.author
    message.channel.send("<@" + member.user.id + "> Attention à ton langage")
    message.delete()
  }
})

bot.on('message', message => {
  if (message.content === 'fdp') {
    const member = message.mentions.members.first() || message.member;
      let target = message.mentions.users.first() || message.author
    message.channel.send("<@" + member.user.id + "> Attention à ton langage")
    message.delete()
  }
})

bot.on('message', message => {
  if (message.content === 'cul') {
    const member = message.mentions.members.first() || message.member;
      let target = message.mentions.users.first() || message.author
    message.channel.send("<@" + member.user.id + "> Attention à ton langage")
    message.delete()
  }
})

bot.on('message', message => {
  if (message.content === 'pute') {
    const member = message.mentions.members.first() || message.member;
      let target = message.mentions.users.first() || message.author
    message.channel.send("<@" + member.user.id + "> Attention à ton langage")
    message.delete()
  }
})

bot.on('message', message => {
  if (message.content === 'connard') {
    const member = message.mentions.members.first() || message.member;
      let target = message.mentions.users.first() || message.author
    message.channel.send("<@" + member.user.id + "> Attention à ton langage")
    message.delete()
  }
})

bot.on('message', message => {
  if (message.content === 'ntm') {
    const member = message.mentions.members.first() || message.member;
      let target = message.mentions.users.first() || message.author
    message.channel.send("<@" + member.user.id + "> Attention à ton langage")
    message.delete()
  }
})

bot.on('message', message => {
  if (message.content === 'ta mère') {
    const member = message.mentions.members.first() || message.member;
      let target = message.mentions.users.first() || message.author
    message.channel.send("<@" + member.user.id + "> Attention à ton langage")
    message.delete()
  }
})
