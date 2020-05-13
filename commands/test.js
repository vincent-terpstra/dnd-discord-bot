const characters = require('./character.js')

module.exports = {
    name: 'test',
    desc: 'Test all player rolls',
    usage: '<>',
    cooldown: 1,
    master: true,
    execute(msg, array){
        const player = msg.mentions.users.first() || msg.author;
        const char = characters.get(player)
        if(array[0] != undefined){
            let times = 5
            let cmd = array.shift()
            while(times-->0){
                char.runCommand(msg, cmd, array)
            }
        } else {
            Array.from(char.effects).map(
                effect => {
                    char.runCommand(msg, effect[0], array)
                }
            )
        }
        
        
    }
}