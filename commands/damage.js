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
                characterSheets.get(player).damage(msg, array[1])
            }
        }
    }
}