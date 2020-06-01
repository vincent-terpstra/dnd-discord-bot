module.exports = {
    data: {
        name: 'Vampire',
        about: `Vampires are nocturnal creatures viewed with suspicion and mistrust. Their thirst for blood does not help their reputation.`,
        flaw: 'The Thirst - For Blood!',
        deathsight: 'Able to see the wraith world',
        feast: 'Steal health from an enemy'
    },
    rolls: {
        feast: { 
            desc: `Drink from the blood of your enemies`,
            func: function(msg, args, char){
                let heal = char.heal(msg, this.roll)
                msg.reply(`has feasted ${heal[0]}${heal[1]} dmg!`)
            },
            roll: '2d4 2*int '
        },
    },

    health: 16,
    buff: { 'int': 2}
}