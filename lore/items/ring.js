module.exports = {
    name: 'ring',
    data: {
        name: 'Charred Ring',
        about: 'A blackened that shrouds the user in darkness',
        deathsight: 'Allows the wearer to see the wraith world',
        stealth: 'When in shadow gain +3 to stealth rolls',
        secret: 'while stealthing with this ring you should quietly hum the theme song to a spy movie\n'+
        '\tex: James bond, pink panther, batman... (or play it in the background on your speakers)'
    },
    rolls: {
        stealth: { 
            desc: `Sneak through the shadows!`,
            verb: `was very very quiet`,
            roll: `1d20 3 int`
        }
    }
}