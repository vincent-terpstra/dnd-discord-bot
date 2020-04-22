const discord = require("discord.js")
const { master } = require("../config.json")

class Character {
    constructor(username){
        this.username = username;
        this.name = "";
    }

    setName(name){
        this.name = name;
    }

    message(){
        this.username.send("Character " + this.name);
    }

    runCommand(msg){
        msg.channel.send('RUN COMMAND RUN')
    }

}

module.exports = {
    characterSheets: new discord.Collection(),
    name: 'character',
    desc: 'Your player character',
    usage:'<name charactername>',
    execute(msg, args){
        const {characterSheets} = msg.client
        if(msg.author.username === master && args.length === 1){
            const create = msg.mentions.users.first();
            if(create != undefined){

                const char = new Character(create);
                characterSheets.set(create, char)
            }
        }

        if(characterSheets.has(msg.author)){
            const char = characterSheets.get(msg.author);
            if(args.length >= 2){
                if(args[0] === 'name'){
                    args.shift();
                    char.setName(args.join(' '))
                }
            }
            char.message()
        }
    }
}


