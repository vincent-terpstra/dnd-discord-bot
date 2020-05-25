const loader = require('../character.json')

module.exports = {
    name: 'allplayers',
    desc: 'reads out active players',
    cooldown: 10,
    execute(msg, array){
        Array.from(msg.channel.guild.members.cache).map(
            user=> {
                let name = user[1].user.username
                if(loader[name]){
                    msg.channel.send(`${name}: ${loader[name].join(', ')}`)
                }
                
            }
        )
    }
}