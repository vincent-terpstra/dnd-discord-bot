module.exports = {
    data: {
        name: 'City Watch Gear',
        uniform: 'Red shirt and brown trousers',
        truncheon: 'A brutal weapon for a less civilized age',
        badge: 'Cheap tin, wear it with pride'
    },
    rolls: {
        smash: { 
            desc: `Smash the enemy! chance to STUN! alias[stun]`,
            roll: "2d4 2*str",
            verb: 'has bludgeoned'
        },
        disarm:{
            desc: `Bash the enemy! chance to DISARM! alias[attack]`,
            roll: `1d6 str`,
            verb: 'has attacked'
        }
    },
}