module.exports = {
    data: {
        name: 'Dynamite',
        about: 'Ka-BOOM',
        instructions: 'Light the fuse, toss away. Someones about to have a bad day'
    },
    rolls: {
       kaboom: {
            actor: 'The dynamite',
            limit: 4,
            desc: `Destroy structures and do damage (3-1 round timer)`,
            verb: `goes kaboom`,
            roll: `2d8 4`
        },
    }
}