module.exports = {
    data: {
    name: 'Char; AAron an escaped prisioner / flame demon'
    },
    health: 20,
    buff: {'ins' : -1, 'str': 3, 'int':-1, 'con':2},
    rolls: {
        
        ignite: {
            actor: 'The living flame',
            desc: `Try to ignite in an area!`,
            verb: `lights the room on fire`,
            saving: 'improv'
        },
        spark: {
            actor: 'The creature of fire',
            desc: `Rain down fiery debris`,
            verb: `rains down fiery debris `,
            roll: `2d4 str -2`
        },
        fire: {
            actor: ':flame:You',
            verb: 'are on fire!:flame: 3dmg at the start of each turn',
            saving: 'con 14 during turn'
        },
        extinguish: { 
            desc: `remove fire (and strength)!`,
            func: function(msg, args, char){
                msg.channel.send(`The fire subsides`)
                    const str = char.traits.get('strength') - 1
                    msg.channel.send(`AAron's strength is now ${str}!`)
                    char.traits.set('strength', str)
            },
        },
        ignite: { 
            desc: `create fire (and strength)!`,
            func: function(msg, args, char){
                msg.channel.send(`The blaze rages`)
                    const str = char.traits.get('strength') + 1
                    msg.channel.send(`AAron's strength is now ${str}!`)
                    char.traits.set('strength', str)
            },
        },
        douse: {
            desc: 'use a bucket',
            actor: 'The water',
            verb: 'vapourizes in a rush of steam',
            roll: '10 -1*str'

        },
        chains: { 
            actor: 'The flame demon',
            desc: `Attack with chains!`,
            verb: `whips you with his chains`,
            roll: `2d4 str`
        },
        shove: {
            actor: 'AAron',
            verb: `pushs you over the edge`,
            saving: 'str 15'
        },
        smoke: {
            actor: 'The acrid smoke',
            verb: 'makes you cough and wheeze',
            saving: 'con 17'
        },
        rage: {
            actor: 'AAron',
            desc: 'heal and retaliate',
            verb: 'burns with fiery rage, and heals for',
            roll: '3*str'
        },
        collapse: {
            actor: 'The room',
            verb: 'collapses into rubble',
            saving: 'str 17'
        }
    }
}