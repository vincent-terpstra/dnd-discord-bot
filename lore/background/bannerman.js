module.exports = {
    data: {
        name: 'Bannerman',
        history: 'The bannermen were establish when a malcontented misinformed mob mobbed a squad, believing '+
        'them to be a malintentioned mob of malicious means. Now the bannerman holds the banner high inspiring '+
        'unfounded bravery in the hearts the squad.',
        banner: 'The sigil of Ker Plunk - A fist choking a rooster.',
        rally: 'all allies gain advantage on (or may reroll), a saving throw (does not stack)',
        intimidate: 'Raise your banner to intimidate (+1)'
    },
    rolls: {
        rally: { 
            desc: `Rally the troops (all allies gain adv / may reroll) a saving throw`,
            limit: 3,
            func: function(msg, args){
                msg.reply(`rally the troops! (all allies gain adv / may reroll) a saving throw (not stacking)`)
            }
        },
        intimidate: { 
            desc: `Raise your banner to intimidate(+2)`,
            limit: 3,
            verb: `raised his banner! To roll for intimidation`,
            roll: `1d20 str 2`
        }
    },
}