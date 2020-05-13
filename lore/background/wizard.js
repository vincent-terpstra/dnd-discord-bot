module.exports = {
    data: {
        name: 'Wizard School Dropout',
        about: 'An underachiever at The Academy, you were expelled when <INSERT tragic backstory>',
        wild: 'When you crit fail or succeed! Roll for effect (no luck!)',
        insight: 'Can sense if something is magical in nature\n'+
            '\tThat giant animated skeleton over there? Yea, that would be magic!',
        flame: 'By snapping your fingers you are able to create a flame on the tip of your thumb\n'+
            '\tCould be done with flint and sleight of hand (but where is the fun in that)',
        mage_hand: 'Telekinesis, move objects with your mind! (range short)'+
            '\n\tMust succeed a int check, and the object should be less then 10 kg'
        
    },
    rolls: {
        wild: { 
            desc: `Random effect on crit or fail`,
            func: function(msg, args){
                msg.reply(`has a surge of wild magic and is now ${this.effects[Math.floor(Math.random() * this.effects.length)]}`)},
                effects: ['bold', 'coward', 'loud', 'quiet', 'vigor', 'nausea', 'lucky', 'clumsy']
        },
        flame: { 
            desc: `Create a small flame in your hand!`,
            verb: `played with fire`,
            roll: `1d20 int`
        },
        hand: { 
            desc: `Move objects, with your mind!`,
            verb: `gave it a push`,
            roll: "1d20 2*int"
        }

    },
    buff: {'int': 3, 'con': -1}
}