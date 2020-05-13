module.exports = {
    data: {
        name: 'Werewolf',
        about: 'AHH-WOOOOOOO!'
    },
    rolls: {
        leap: { 
            desc: `Cover a medium range in a single bound`,
            roll: '1d20 str 6',
            verb: 'takes a mighty leap'
        },
        rip: { 
            desc: `Melee attack and gain strength (max 3)`,
            roll: '3d4 str',
            count: 3,
            func: function(msg, args, char){
                msg.reply(`attacks for ${char.crit(this.roll)}`)
                if(this.count > 0){
                    this.count --
                    const str = char.traits.get('strength') + 1
                    msg.reply(`strength is now ${str}!`)
                    char.traits.set('strength', str)
                }
            },
        },
        tear: { 
            desc: `Melee attack, does not require an attack action`,
            roll: '2*str',
            verb: 'ferociously attacks'
        },
        
    },
    buff: {'ins': 3, 'str':1}
}