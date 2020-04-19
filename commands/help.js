const {prefix, master} = require('../config.json')

module.exports = {
    name: 'help',
    desc: 'A useful command',
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
        }

        if(message.author.username === master){
            message.author.send(masterString)
            message.channel.send(cacheString)
        } else {
            message.author.send(cacheString)
        }
    }
}

let cacheString = ""
let masterString = ""