module.exports = {
    data: {
        name: 'Vial of Blood',
        about: 'A vial of old coagulating blood'
    },
    rolls:{
        thirst: { 
            desc: `Drink the blood (and heal)`,
            roll: '1d6 2',
            limit: 1,
            func: function(msg, args, char){
                msg.reply(` has stopped for a snack`)
                char.heal( msg, this.roll)
                char.buff(msg, 'ins', 1)
            },
        },
    }
}