module.exports = {
    name: 'wizard',
    data: {
        name: 'Wizard School Dropout',
        about: 'An underachiever at The Academy you were expelled when <INSERT tragic backstory>',
        wild: 'When you crit fail or succeed! Roll for effect (no luck!)',
        insight: 'Can sense if something is magical in nature\n'+
            '\tThat giant animated skeleton over there? Yea, that would be magic!'
        
    },
    rolls: {
        wild: { 
            desc: `Random effect on crit or fail`,
            func: function(msg, args){
                msg.reply(`has a surge of wild magic and is now ${this.effects[Math.floor(Math.random() * this.effects.length)]}`)},
                effects: ['bold', 'coward', 'loud', 'quiet', 'vigor', 'nausea', 'lucky', 'clumsy']
        },
    },
    buff: {'int': 2}
}