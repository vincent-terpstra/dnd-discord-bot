module.exports = {
    name: 'gear',
    data: {
        name: 'City Watch Gear',
        uniform: 'Red shirt and brown trousers'
    },
    rolls: {
        bludgeon: { 
            desc: `Smash the enemy! With a chance to stun! alias[stun, smash]`,
            func: function(msg, args){
                let attack = Math.floor(Math.random() * 6 + 1)
                msg.reply(` has attacked and rolled ${attack}.${attack==6? ' A stunning blow': ''}`  )},
        },
        disarm:{
            desc: `Smash the enemy! With a chance to disarm! alias[attack]`,
            func: function(msg, args){
                let attack = Math.floor(Math.random() * 6 + 1)
                msg.reply(` has attacked and rolled ${attack}.${attack==6? ' A disarming blow': ''}`  )
            },
        }
    },
}