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
        Array.from(char.effects).map(
            effect => {
                char.runCommand(msg, effect[0], array)
            }
        )
        
        
    }
}