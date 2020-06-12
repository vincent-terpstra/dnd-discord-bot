module.exports = {
    data: {
        name: 'Brute',
        about: 'A thug with a shield, gainfully employed',
        history: 'Sometimes you just need an extra body',
        
    },
    rolls: {
        block: { 
            desc: `Reduce the next dmg and apply disadvantage`,
            verb: `blocked with his shield`,
            roll: `1d4`
        },
        bash: { 
            desc: `Hit with your shield (2nd attack)`,
            verb: `bashed with his shield`,
            roll: `1d6 str`
        },
        throw: {
            desc: 'Throw your shield',
            verb: 'chucked his shield',
            roll: '1d4 2*str'
        }
    },
    buff: {'str': 2, 'con': 1},
    
}