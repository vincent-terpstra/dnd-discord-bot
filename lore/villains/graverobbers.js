module.exports = {
    data: {
        name: 'Three graverobbers from the Graverobbers guild',
    },
    rolls: {
        shovel: { 
            actor: 'The tall lanky fellow',
            desc: `Attack with the shovel!`,
            verb: `swings his shovel`,
            roll: `1d10`
        },
        pickaxe: { 
            actor: 'Large swarthy figure',
            desc: `Attack with the pickaxe!`,
            verb: `bites`,
            roll: `1d8 2`
        },
        claw: {
            actor: 'The raptor',
            desc: `The raptor scratches!`,
            verb: `claws`,
            roll: `1d10 2`
        },
        growls: {
            actor: 'The raptor',
            desc: `growls, a low menacing rumble`,
            effect: `fear`,
            saving: 'con'
        },
        fetch: {
            actor: 'The raptor',
            desc: 'drops the baton and waits in anticipation'
        }
    }
}