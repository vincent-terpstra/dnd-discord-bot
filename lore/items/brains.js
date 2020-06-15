module.exports = {
    data: {
        name: 'BRAINNNSSSS',
        about: 'A jerkified slice of brain matter'
    },
    rolls:{
        thirst: { 
            desc: `Eat some brains (and heal)`,
            roll: '1d8',
            limit: 1,
            func: function(msg, args, char){
                msg.reply(` has stopped for a snack`)
                char.heal( msg, this.roll)
                char.buff(msg, 'int', 1)
            },
        },
    }
}