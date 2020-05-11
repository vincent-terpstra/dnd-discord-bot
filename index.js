const library = require('./lore/library.js');
const alias = require('./commands/alias.json')
const characters = require('./commands/character.js')
const { master, prefix, token } = require('./config.json');

const Discord = require("discord.js")

const client = new Discord.Client()
const cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();

const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file=>file.endsWith('.js'))

for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if(!msg.content.startsWith(prefix) || msg.author.bot)
    return;
  try {
    const args = msg.content.slice(prefix.length).split(/ +/);
    let commandName = args.shift().toLowerCase();

    if(alias[commandName])
      commandName = alias[commandName]
      
    if(client.commands.has(commandName)){
      const command = client.commands.get(commandName);

      if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, Date.now())
      } else {
        const now = Date.now();
        const delay = cooldowns.get(command.name) + (command.cooldown || 3) * 1000;
        if(now < delay)
          return;
        cooldowns.set(command.name, now);
      }

      if(!command.master || msg.author.username === master){
        command.execute(msg, args);
        return;
      }
    } else if(library[commandName]){
        msg.channel.send(library[commandName])
        return;
    } else if(characters.get(msg.author).runCommand(msg, commandName, args)){
          return;
    }
    //FAIL message
    msg.reply("Let the Lord of Chaos rule!");
    } catch(ex){
      console.log(ex)
    }
})

client.login(token)
