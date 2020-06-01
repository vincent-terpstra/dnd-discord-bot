module.exports = {
    data: {
        pact: 'A deal with the Lord of Chaos',
        soul_bind: 'Touch a character, each turn you both take 2 dmg, you gain adv on attack rolls against this character (free action)'
    },
    rolls: {
        bind: { 
            desc: `Merge souls with enemy; (2dmg per turn to BOTH bonded), adv on attacks`,
            verb: `My soul to your soul!\n(2dmg/turn BOTH, adv on attacks)`
        },
        bound:{
            desc: `Gain insight on your bound foe`,
            roll: `1d20 5 ins`,
            func: function(msg, args, char){
                let r1 = char.dice(this.roll);
                let r2 = char.dice(this.roll);

                if(r1[0] < r2[0])
                    r1 = r2;

                msg.reply(`reveal me your secrets ${r1[0]}${r1[1]}!`)
            },
        }
    },
}