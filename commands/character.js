const discord = require("discord.js")
const { master } = require("../config.json")
const alias = require('../library/alias.js')


class Character {
    constructor(username, name){
        this.username = username;
        this.name = name;
        this.traits = new discord.Collection();

        const values = ["strength", "constitution", "dexterity", "wisdom", "intelligence", "charisma"]
        const rolls = [-2, -1, -1, 0, 1, 2]
        var i = rolls.length;
        while(0 != i){
            let j = Math.floor(Math.random() * i);
            i--;
            let tmp = rolls[i];
            rolls[i] = rolls[j];
            rolls[j] = tmp;
        }
        for(var i = 0; i < rolls.length; i++){
            this.traits.set(values[i], rolls[i]);
        }

    }

    setName(name){
        this.name = name;
    }

    message(){
        let reply = `Character ${this.name}\n`
        Array.from(this.traits).map(
            pair => ( reply += `\t${(pair[1] < 0 ? "" : " ") + pair[1]} : ${pair[0]}\n`)
        )
        reply += `try !<trait> or !<first 3 letters of trait> to roll`

        this.username.send(reply)
    }

    runCommand(msg, cmd, args){
        if(alias[cmd])
            cmd = alias[cmd]

        if(this.traits.has(cmd)){
        let roll = Math.floor(Math.random() * 20) + 1;
            let end = ""
            if(roll == 20)
                end = "(Crit Success)!"
            if(roll == 1)
                end = "(Crit Failure)!"

            msg.channel.send(`${this.username} rolled ${cmd}: ${roll + this.traits.get(cmd)} ${end}`)
            
        } else {
            msg.channel.send("unable to process "+ cmd);
        }
    }

}

module.exports = {
    characterSheets: new discord.Collection(),
    name: 'character',
    desc: 'Your player character',
    usage:'<name charactername | empty>',
    execute(msg, args){
        if(msg.author.username === master && args.length === 1){
            const create = msg.mentions.users.first();
            if(create != undefined){
                const char = new Character(create, create.username);
                this.characterSheets.set(create, char)
            }
        }

        if(this.characterSheets.has(msg.author)){
            const char = this.characterSheets.get(msg.author);
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


