const { master, prefix, token } = require('./config.json');
const fs = require('fs');

const Discord = require("discord.js")
const client = new Discord.Client()

const cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();



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
  
  const args = msg.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  if(!client.commands.has(commandName)) return;
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
  

  try {
    if(!command.master || msg.author.username === master)
      command.execute(msg, args);

  } catch (error){
    console.error(error);
  }
})

client.on("guildMemberAdd", member=>{
  member.send("Dovie'andi se tovya sagain.\n\ttype !help for more commands")
})

client.login(token)
