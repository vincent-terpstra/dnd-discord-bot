module.exports = {
    data: {
        name: 'Jojo',
    },
    rolls: {
        chomp: { 
            actor: 'The not-a-croc',
            desc: `The raptor eats a rat!`,
            verb: `chomps the rat, blood spurts everywhere!`,
            roll: `9`
        },
        bite: { 
            actor: 'The raptor',
            desc: `The raptor bites!`,
            verb: `bites`,
            roll: `1d4 -1`
        },
        claw: {
            actor: 'The raptor',
            desc: `The raptor scratches!`,
            verb: `claws`,
            roll: `1d10 2`
        },
        growl: {
            actor: 'The terrifying ferocious beast',
            verb: `growls, a low menacing rumble`,
            effect: `fear`,
            saving: 'con'
        },
        fetch: {
            actor: 'Jojo',
            verb: 'drops the baton and waits in anticipation'
        }
    }
}