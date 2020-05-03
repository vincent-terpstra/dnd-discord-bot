const { characterSheets } = require('./character.js')

module.exports = {
    name: 'unlock',
    desc: 'Opens new roles for players',
    usage: '<@player> <role>',
    cooldown: 1,
    master: true,
    execute(msg, array){
        let user = msg.mentions.users.first()
        if(characterSheets.has(user)){
            let char =characterSheets.get(user)
            char.addAbout(array[1])
            char.message()
        }
    }
}