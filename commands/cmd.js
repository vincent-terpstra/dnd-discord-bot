const characters = require('./character.js')

module.exports = {
    name: 'cmd',
    desc: 'Adds a command to the players character',
    usage: 'verb: roll',
    cooldown: 1,
    master: true,
    execute(msg, array){
            
        let char = characters.get(msg.author);
        array = array.join(' ').split(':');
        if(array.length === 3){
            console.log(`!cmd ${array[0]}: ${array[1]}: ${array[2]}`)
            char.effects.set(array[0], {actor:'', verb:`${array[1]}`, roll:`${array[2]}`})
            
            //msg.reply(`creating ${array[0]}: ${array[1]}, roll: ${array[2]}`)

            msg.channel.bulkDelete(1, true).then(
                    char.runCommand(msg, array[0], array)
            )
        }
    }
}