module.exports = {
    data: {
        name: 'City Watch Gear',
        uniform: 'Red shirt and brown trousers',
        truncheon: 'A brutal weapon for a less civilized age',
        badge: 'Cheap tin, wear it with pride'
    },
    rolls: {
        smash: { 
            desc: `Smash the enemy! Stun on 10! alias[stun]`,
            roll: "1d6 2*str",
            func: function(msg, args, char){
                let dice = char.dice(this.roll);
                let attack = dice[0]
                msg.reply(` has bludgeoned and rolled ${attack+(attack>=10? ' A STUN': '')+dice[1]}!`  )
            },
        },
        disarm:{
            desc: `Bash the enemy! Disarm on 8! alias[attack]`,
            roll: `2d4 str`,
            func: function(msg, args, char){
                let dice = char.dice(this.roll);
                let attack = dice[0]
                msg.reply(` has attacked and rolled ${attack+(attack>=8? ' DISARM': '')+dice[1]}!`  )
            },
        }
    },
}