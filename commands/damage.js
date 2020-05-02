const { characterSheets } = require('./character.js')

module.exports = {
    name: 'damage',
    desc: 'Damages a player',
    usage: '<@player> <damage>',
    cooldown: 1,
    master: true,
    execute(msg, array){
        const player = msg.mentions.users.first();
        if(player != undefined){
            if(characterSheets.has(player)){
                let char = characterSheets.get(player);
                char.health -= array[1];
                if(char.health < 0)
                    char.health = 0
                
                msg.channel.send(`${char.username} has taken ${array[1]} damage! They have ${char.health} health!`)
            }
        }
    }
}