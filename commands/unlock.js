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
                let char = characterSheets.get(player)
                char.addAbout(array[1])
                char.message();
            }
        }
    }
}