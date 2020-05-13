const discord = require("discord.js")

const{master} = require('../config.json')
const loader = require('../character.json')
const alias = require("./alias.json")

const fs = require('fs');
const aboutValues = new discord.Collection();
load = function(str){
    const files = fs.readdirSync(`./lore/${str}`).filter(file=>file.endsWith('.js'))
    for(const file of files){
    const about = require(`../lore/${str}/${file}`);
    aboutValues.set(file.slice(0, -3), about);
    }
}

load('characters')
load('background')
load('villains')
load('items')

class Character {
    constructor(username){
        this.health = this.maxhealth = 4;
        this.username = username;
        this.name = username.username;
        this.traits = new discord.Collection();
        this.about  = new discord.Collection();
        this.effects  = new discord.Collection();

        const values = ["strength", "constitution", "insight", "intelligence"]
        values.map(
            val => {this.traits.set(val, -1);}
        )
    }
    roll(args){
        return this.dice(args)[0]
    }

    crit(args){
        let vals = this.dice(args)
        return vals[0] + vals[1]
    }

    dice(args){
        let sum = 0
        let crit = true
        let fail = true
        args.split(/ +/).map(
            a => {
                if(a.includes('*')){
                    let sp = a.split('*')
                    let al = alias[sp[1]]
                    if(this.traits.has(al)){
                        sum += this.traits.get(al) * +sp[0]
                    }
                } else if (a.includes('d')){
                    let sp = a.split('d')
                    while(sp[0] -- > 0){
                        let roll = Math.floor(Math.random() * sp[1] + 1)
                        sum += roll
                        crit = crit && roll == sp[1]
                        fail = fail && roll == 1
                    }
                } else if(this.traits.has(alias[a])){
                    sum += this.traits.get(alias[a])
                } else {
                    sum += +a
                }
            }
        )
        return [sum, crit  ? ':fire:' : (fail ? ':x:':'')]
    }

    message(username){
        if(username == undefined)
            username = this.username
        let reply = [];
        reply.push(`:chess_pawn:Character ${this.name}\n\tHealth: ${this.health}`)
        Array.from(this.traits).map(
            pair => ( reply.push(`\t${(pair[1] < 0 ? "" : " ") + pair[1]} : ${pair[0]}`))
        )
        reply.push(`try !<trait> or !<first 3 letters of trait> to roll\n`)
        username.send(reply, {static: true})
        reply = ['']
        Array.from(this.effects).map(
            roll => {
                let limit = roll[1].limit >= 0 ? `(limit ${roll[1].limit})` : ''
                reply.push(`!${roll[0]}: ${roll[1].desc || roll[1].verb} ${limit}`)
                if(roll[1].roll)
                    reply.push(`\t(roll) ${roll[1].roll}`)      
            }
        )
        username.send(reply, {static: true})
        reply = ['']
        Array.from(this.about).map(
            trait => {
                Object.entries(trait[1].data).map(
                    data=> reply.push(`${data[0]} - ${data[1]}`)
                )
                
                if(trait[1].buff){
                    let b = `buffs: `
                    Object.entries(trait[1].buff).map(
                        buff=>b +=`${buff[0]} (${buff[1]}) `
                    )
                    reply.push(b)
                }
                reply.push('')
            }
        )
        
        username.send(reply, {static: true})
    }

    addAbout(str){
        if(!aboutValues.has(str))
            return;

        let add = aboutValues.get(str);
        this.about.set(str, add);

        if(add.buff)
        Object.entries(add.buff).map(
            buff => {
                let key = alias[buff[0]]
                if(key == undefined)
                    key = buff[0]
                if(this.traits.has(key)){
                    this.traits.set(key, this.traits.get(key) + buff[1])
                } else 
                    console.log(`Unable to buff: ${buff[0]}`)
            }
        )

        if(add.rolls)
        Object.entries(add.rolls).map(
            roll => this.effects.set(roll[0], roll[1])
        )
        
        if(add.health)
            this.health = this.maxhealth = add.health
    }

    runCommand(msg, cmd, args){
        if(this.traits.has(cmd)){
            let roll = this.crit(`${this.traits.get(cmd)} 1d20`)
            msg.channel.send(`${this.username} rolled ${cmd}: ${roll}!`)
            return true;
        } else if(this.effects.has(cmd)){
            let roll = this.effects.get(cmd);
            if(roll.limit >= 0){
                if(roll.limit > 0) 
                    roll.limit --
                else
                    return false
            }

            if(roll.func)
                roll.func(msg, args, this)
            else if(roll.roll)
                msg.channel.send(`${roll.actor || msg.author} ${roll.verb} for ${this.crit(roll.roll)}!`)
            else {
                const saving = roll.saving ? ` (Saving Throw ${roll.saving}!)` : ''; 
                msg.channel.send(`${roll.actor || msg.author} ${roll.verb}!${saving}`)
            }
            return true;
        }
        return false;
    }

    heal(msg, roll){
        let heal = this.dice(roll)
        this.health = Math.min(this.maxhealth, Math.max(this.health + heal[0], 0))
        msg.channel.send(`${this.username} has healed ${heal[0]}${heal[1]}! They have ${this.health} health!`)
    }

}

module.exports = {
    characterSheets: new discord.Collection(),
    name: 'character',
    desc: 'Your player character',
    usage:'',
    cooldown: .5,
    get: function(author){
        if(this.characterSheets.has(author)){
                return this.characterSheets.get(author)
        } else {
            const char = new Character(author)
            this.characterSheets.set(author, char)
            if(loader[author.username])
            loader[author.username].map(
                value => char.addAbout(value)
            )
            char.addAbout('gear')

            return char;
        }
    },
    execute(msg, args){
        if(msg.author.username === master && args.length >= 1){
            let make = msg.mentions.users.first();
            if(make != undefined){
                let char = this.get(make)
                char.message(msg.author)
                this.characterSheets.set(msg.author, char); 
            } else {
                const char = new Character(msg.author)
                args.map(
                    value =>{
                        char.addAbout(value)
                    }
                )
                this.characterSheets.set(msg.author, char)
                char.message()
            }
        } else {
            this.get(msg.author).message()
        }
    } 
}
