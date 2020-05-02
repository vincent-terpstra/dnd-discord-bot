module.exports = {
    name: 'gear',
    data: {
        name: 'City Watch Gear',
        uniform: 'Red shirt and brown trousers',
        truncheon: 'A brutal weapon for a less civilized age'
    },
    rolls: {
        smash: { 
            desc: `Smash the enemy! Stun on 10! alias[stun]`,
            roll: `1d6 2*str`,
            func: function(msg, args, char){
                let attack = char.roll(this.roll)
                msg.reply(` has bludgeoned and rolled ${attack}.${attack >= 10? ' A STUN!': ''}`  )
            },
        },
        disarm:{
            desc: `Smash the enemy! Disarm on 8! alias[attack]`,
            roll: `2d4 str`,
            func: function(msg, args, char){
                let attack = char.roll(this.roll)
                msg.reply(` has attacked and rolled ${attack}.${attack>=8? ' DISARM!': ''}`  )
            },
        }
    },
}