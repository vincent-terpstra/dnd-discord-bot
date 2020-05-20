module.exports = {
    data: {
        name: 'Sergent Gunner First Class',
        history: 'Some fifty years ago the Duke decreed pigeons as vagrants, vandals and vermin.' +
        ' Heavy iron-bore flintlock pistols were issued to each squad with orders to shoot on sight.' +
        ' The Ker-plunk City Pidgeon was soon hunted to extinction. Tasty, delicious, extinction.',
        pistol: 'Heavy iron-bore flintlock pistol, (range long)'
    },
    rolls: {
        load: {
             desc: `Load your weapon chance to fail (counts as attack)`,
             func: function(msg, args, char){
                const roll = char.dice(this.roll)
                if(roll[0] == 1){
                    msg.reply(`has failed to load his gun${roll[1]}!`)
                } else {
                    msg.reply(`has locked and loaded his gun${roll[1]}`)
                }
            },
            roll: `1d6`
             
         },
         fire: {
            desc: `Fire your pistol (chance to miss) ammo 3 shots`,
            roll: `3d6 6`,
            func: function(msg, args, char){
                const aim = char.dice(`1d8`)
                const emote = aim[0] <= 2 ? ':x:' : (aim[0] >= 4 ? ':dart:' : '')
                msg.reply(`BANG!!! Damage ${char.crit(this.roll)}! Aim ${aim[0]}${emote}`)
            }
        },
     }
}