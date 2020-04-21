const {prefix, master} = require('../config.json')

module.exports = {
    name: 'help',
    desc: 'A useful command',
    usage: '<command | empty>',
    execute(message, args){
        const {commands } = message.client;
        if(cacheString == ""){
            cacheString = `Here\'s a list of commands\n`
            masterString = cacheString;

            commands.map(command =>{
                let str = `\t${prefix} ${command.name}: ${command.desc}\n`
                if(command.master){
                    masterString += str;
                } else {
                    masterString += str;
                    cacheString += str;
                }
            });

            cacheString += "Try !help <command> for more information"
        }
        if(args.length == 1){
            if(commands.has(args[0])){
                const command = commands.get(args[0]);
                let reply = "";
                if(command.help){
                    command.help(message)
                } else {
                    reply = `Help for ${command.name}\n\tAbout: ${command.desc}`;
                    if(command.usage)
                        reply += `\n\tUsage: ${command.usage}`
                    message.channel.send(reply);
                }
            }
        } else if(message.author.username === master){
            message.author.send(masterString)
            message.channel.send(cacheString)
        } else {
            message.author.send(cacheString)
        }
    }
}

let cacheString = ""
let masterString = ""