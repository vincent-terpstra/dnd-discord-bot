module.exports = {
    data: {
        name: 'Werewolf',
        about: 'AHH-WOOOOOOO!!!',
        flaw: 'your character communicates in growls and snarls (and is a large hairy beast)'
    },
    rolls: {
        leap: { 
            desc: `Cover a medium range in a single bound`,
            roll: '1d20 str 6',
            verb: 'takes a mighty leap'
        },
        rip: { 
            desc: `Melee attack and gain (max+3)strength `,
            roll: '3d4 str',
            count: 3,
            func: function(msg, args, char){
                msg.reply(`attacks for ${char.crit(this.roll)}`)
                if(this.count-- > 0){
                    char.buff(msg, 'str', 1)
                }
            },
        },
        tear: { 
            desc: `Melee attack, does not require an action`,
            roll: '2*str',
            verb: 'ferociously attacks'
        },
        
    },
    buff: {'ins': 3, 'str':1}
}