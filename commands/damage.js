const characters = require('./character.js')

module.exports = {
    name: 'damage',
    desc: 'Damages a player',
    usage: '<@player> <damage>',
    cooldown: 1,
    master: true,
    execute(msg, array){
        const player = msg.mentions.users.first();
        if(player != undefined && array[1] >= 0){
            
        let char = characters.get(player);
        
        char.health = Math.max(char.health - array[1], 0)
        
        msg.channel.send(`${char.username} has taken ${array[1]} damage! They have ${char.health} health!`)
            
        }
    }
}