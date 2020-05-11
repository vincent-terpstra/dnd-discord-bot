module.exports = {
    data: {
    name: 'Werewolf (not a dwarf)',
    about: 'Not much is known about the Mauling Induced Neurological Disease (M.I.N.D.); Lycanthropy. '+
        'Apart from the occasional Lycanthrophile, most of the community views \"your kind\" with '+
        'fear and misunderstanding.',
    flaw: 'It has been a few weeks since you got your rage on, under the light of a full moon.' +
    ' For this reason werewolf are often irritable and hot-headed.',
    dwarven_bread: 'Dwarven domestic disputes are oftens settled with food fights. Leave it to the dwarfs to perfect any weapon'
    },
    health: 20,
    buff: {'ins' : 2, 'str': 1},
    rolls: {
        lunch: { 
            desc: `A dwarven combat snack (disables throw)`,
            roll: '2d4 2*str',
            limit: 1,
            func: function(msg, args, char){
                let heal = char.dice(this.roll)
                char.health += heal[0];
                if(char.health > char.maxhealth)
                    char.health = char.maxhealth
                
                msg.reply(` has stopped for lunch`)
                msg.reply(` has healed ${heal[0]}${heal[1]}! They have ${char.health} health!`)},
        },
        throw: { 
            desc: `Throw the dwarven throwing bread`,
            roll: '3d4',
            verb: 'chucked a chunk of bread'
        },
    }
}