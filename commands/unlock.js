const { characterSheets } = require('./character.js')

module.exports = {
    name: 'unlock',
    desc: 'Opens new roles for players',
    usage: '<@player> <role>',
    cooldown: 10,
    master: true,
    execute(msg, array){
        const player = msg.mentions.users.first();
        if(player != undefined){
            if(characterSheets.has(player)){
                characterSheets.get(player).addAbout(array[1])
            }
        }
    }
}