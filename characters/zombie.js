module.exports = {
    name: 'zombie',
    data: {
        name: 'Zombie',
        about: `You didn't ask to be reborn, stumbling about and moaning brainnsss. But now Master has abandoned (or forgotten about) you, and you are forced to fend for yourself.`,
        flaw: 'The Hunger - ever present gnawing on the back of your mind',
        deathsight: 'Able to see the wraith world',
        undead: 'When you \'die\' decrease your max health by 3, heal to full, and loose a limb'
    },
    rolls: {
        revive: { 
            desc: `Revives your character and lose a limb`,
            func: function(msg, args){
                msg.reply(` has risen "BRAINNSSS" and lost his ${this.effects[Math.floor(Math.random() * this.effects.length)]}`)},
                effects: ['hand', 'hand', 'hand', 'head', 'arm', 'foot', 'foot', 'leg']
        },
    },

    health: 11,
    buff: {'str': 2}
}