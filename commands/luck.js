const { master } = require(`../config.json`) 
const discord = require("discord.js")
const values = new discord.Collection();

module.exports = {
    name: 'luck',
    desc: 'Dovie\'andi se tovya sagain!',
    cooldown: .1,
    execute(msg, array){
        if(array.length === 1){
            if(msg.author.username === master){
                let first = msg.mentions.users.first();
                let rerolls = getValue(first);
                values.set(first, ++rerolls);
                msg.channel.send(`${first} has been blessed with ${rerolls} luck!`)
            }
        } else {
            let rerolls = getValue(msg.author)
            if(rerolls > 0){
                msg.channel.send(`Dovie\'andi se tovya sagain!\n` +
                    `${msg.author} has used a reroll!\n` +
                    `\tThey have ${--rerolls} left!`)
                values.set(msg.author, rerolls)
            } else {
                msg.channel.send(`${msg.author}'s luck has run out!`)
            }
        }
        
    },
    help: (msg)=>{
        msg.reply(
            `Dovie\'andi se tovya sagain!\n` +
            `${msg.author} has ${getValue(msg.author)} rerolls\n` +
            `\tThese can be used to alter any roll that affects them!\n` +
            `\tExcept critical failure or success!`
        )
    }

    
}

let getValue = user =>{
    if(!values.has(user))
        values.set(user, 2)

    return values.get(user)
}