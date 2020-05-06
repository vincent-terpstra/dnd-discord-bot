const { characterSheets } = require('./character.js')

module.exports = {
    name: 'test',
    desc: 'Test all player rolls',
    usage: '<>',
    cooldown: 1,
    master: true,
    execute(msg, array){
        const player = msg.author;
        if(characterSheets.has(player)){
            let char = characterSheets.get(player)
            try {
            Array.from(char.effects).map(
                effect => {
                    char.runCommand(msg, effect[0], array)
                }
            )
            } catch (ex){}
        }
        
    }
}