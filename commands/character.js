const discord = require("discord.js")
const { master } = require("../config.json")

const fs = require('fs');
const aboutFiles = fs.readdirSync('./characters').filter(file=>file.endsWith('.js'))

const aboutValues = new discord.Collection();

for(const file of aboutFiles){
  const about = require(`../characters/${file}`);

  aboutValues.set(about.name, about);
}

class Character {
    constructor(username){
        this.health = 4;
        this.username = username;
        this.name = username.username;
        this.traits = new discord.Collection();
        this.about  = new discord.Collection();
        this.effects  = new discord.Collection();

        this.traits.set('AC', 16)
        const values = ["str", "con", "dex", "wis", "int", "cha"]
        values.map(
            val => {this.traits.set(val, -1);}
        )
    }

    damage(msg, dmg){
        this.health -= dmg;
        msg.channel.send(`${this.username} has taken ${dmg} damage; They have ${this.health} health`)
    }

    setName(name){ this.name = name; }

    message(){
        let reply = [];
        reply.push(`Character ${this.name}`)
        reply.push(`\tHealth: ${this.health}`)
        Array.from(this.traits).map(
            pair => ( reply.push(`\t${(pair[1] < 0 ? "" : " ") + pair[1]} : ${pair[0]}`))
        )
        reply.push(`try !<trait> or !<first 3 letters of trait> to roll\n`)

        Array.from(this.about).map(
            trait => {
                let data = trait[1].data
                Object.keys(data).map(
                    key=>{ reply.push(`${key} - ${data[key]}`);}
                )
                
                if(trait[1].buff){
                    let key = Object.keys(trait[1].buff)
                    reply.push(`buff! ${key}: ${trait[1].buff[key]}`)
                }
                reply.push('')
            }
        )
        Array.from(this.effects).map(
            roll => {
                reply.push(`!${roll[0]}: ${roll[1]['desc'] || roll[1]['usage']}`)
            }
        )
        this.username.send(reply, {static: true})
    }

    addAbout(str){
        if(aboutValues.has(str)){
            let add = aboutValues.get(str);
            this.about.set(str, add);

            if(add['buff']){
                let buff = add['buff'];
                Object.keys(buff).map(
                    key=>{ 
                    if(this.traits.has(key)){
                        let val = this.traits.get(key);
                        this.traits.set(key, val + buff[key]);
                    } else {
                        console.log('Unable to buff ' + buff)
                    }}
                )
            }

            if(add['rolls']){
                let rolls = add['rolls']
                Object.keys(rolls).map(
                    roll =>{ this.effects.set(roll, rolls[roll])}
                )
            }

            if(add['health']){
                this.health = add['health']
            }
        }
    }

    runCommand(msg, cmd, args){
        if(this.traits.has(cmd)){
        let roll = Math.floor(Math.random() * 20) + 1;
            let end = ""
            if(roll == 20)
                end = "(Crit Success)!"
            if(roll == 1)
                end = "(Crit Failure)!"

            msg.channel.send(`${this.username} rolled ${cmd}: ${roll + this.traits.get(cmd)} ${end}`)
            
        } else if(this.effects.has(cmd)){
            let roll = this.effects.get(cmd);
            if(roll['func']){
                console.log('func')
                roll['func'](msg, args)
            }
            console.log(roll);
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
        if(msg.author.username === master && args.length >= 1){
            const create = msg.mentions.users.first();
            if(create != undefined){
                const char = new Character(create);
                this.characterSheets.set(create, char)

                args.shift(); //remove username
                while(args.length){
                    let argument = args.shift();
                    char.addAbout(argument)
                }
                char.addAbout('gear')

                char.message();
            }
        } else if(this.characterSheets.has(msg.author)){
            const char = this.characterSheets.get(msg.author)
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


