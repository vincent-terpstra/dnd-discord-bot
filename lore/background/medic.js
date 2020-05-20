module.exports = {
    data:{
        name:'Medic',
        history: 'The medic corps was established when Sergent Nobbs abandoned his patrol and returned to the barracks due to a papercut.'+
            ' After being verbally berated for 5 hours, Sergent Nobbs succumbed to his injuries. R.I.P. Sergent Nobbs.',
        kite_shield: 'Doubles as stretcher or operating table'+
            '\n\tWorn on back\n\tProvides half cover when set in place or running away',
        shroud: 'filmy cotton gauze - Used for bandages or burial',
        distilled_moonlight: 'vial of Aqua Lumien - Purges toxins',
        thread: 'cat-gut and fish bone - Reattachs limbs',
    },
    buff: {'int':1},
    rolls: {
        heal: { 
            desc: `<@player> Use your limited medical expertise to heal (full turn)`,
            func: function(msg, args){
                const player = msg.mentions.users.first()
                if(player != undefined){
                    msg.channel.send(`${player}, where does it hurt?`)
                    require('../../commands/character.js').get(player).heal(msg, this.roll)
                }
            },
            roll: `4d6 int 1d-12`
        },
    }
}