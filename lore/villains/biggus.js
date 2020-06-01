module.exports = {
    data: {
        name: 'The Pontius Biggus Dictus, member of the city council',
    },
    buff: {'ins' : 2, 'str': -2, 'int':3, 'con':-2},
    rolls: {
        shovel: { 
            actor: 'The tall lanky crook',
            desc: `Attack with the shovel!`,
            verb: `swings his shovel`,
            roll: `1d10`
        },
        pickaxe: { 
            actor: 'Large swarthy figure',
            desc: `Attack with the pickaxe!`,
            verb: `attack with his pickaxe`,
            roll: `1d8 2`
        },
        blind: {
            actor: 'The short stout fellow',
            desc: `Try to blind!`,
            verb: `tries to blind you with his lantern`,
            saving: 'improv'
        },
        lantern: {
            actor: 'The short stout fellow',
            desc: `attack with the lantern`,
            verb: `shatters the lantern across your arm`,
            roll: `1d4 -1`
        },
        fire: {
            actor: ':flame:You',
            verb: 'are on fire!:flame: 3dmg at the start of each turn',
            saving: 'con 14 during turn'
        },
        shove: {
            actor: 'The gravedigger',
            verb: `pushs you towards the empty grave`,
            saving: 'str 15'
        },
        pocketdirt: {
            actor: 'The crook',
            verb: 'tries to blind you with pocket dirt',
            saving: 'con 15'
        },
        runaway: {
            actor: 'The graverobber',
            verb: 'Tries to escape',
            roll: '1d20 -4'
        }
    }
}