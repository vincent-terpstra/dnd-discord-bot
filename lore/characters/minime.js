module.exports = {
    data: {
        name: 'Minime',
        about: 'Like you but smaller\n\tYour stats (-4), control with int checks',
        effect: 'Ever see \"Guardians of the Galaxy\"? Think Baby Groot'
    },
    rolls: {
        headbutt: {
            actor: 'Mini golem',
            limit: 3,
            desc: `Mini golem attacks, charging and headbutting`,
            verb: `charges! I AM Golem!!`,
            roll: `1d6 str -4`
        },
    }
}