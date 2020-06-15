const sheets = require('./character.js')

module.exports = {
    name: 'unlock',
    desc: 'Opens new roles for players',
    usage: '<@player> <role>',
    cooldown: 1,
    master: true,
    execute(msg, array){
        let user = msg.mentions.users.first()
        if(user == undefined)
            return;
        let char = sheets.get(user)
        char.addAbout(array[1])
        char.message()

        if(array[1] === 'werewolf')
            msg.channel.send(`${user} is now a werewolf\n\tAHH-WOOOOOOO!!!`)
            
        if(array[1] === 'minime')
            char.runCommand(msg, 'minime')
    }
}