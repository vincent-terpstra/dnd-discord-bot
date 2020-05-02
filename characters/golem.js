module.exports = {
    name: 'golem',
    data: {
        name: 'Golem',
        about: `A constructed creature of living clay, Golems are often used as workers in high intensity areas like forges. This has caused the rumor that Golems are quite stupid. A remote monestary in the Alpines has proven this incorrect, with Golem minds answering questions such as the meaning of life, and the dangers of AI.`,
        flaw: 'Silicon Form - your physical vs. mental range from +2 to -2 depending on temperature\n'+
            '\tHeat makes you strong and dumb, while cold makes you weaker yet smarter',
        living_clay: 'Allows the Golem to heal themself'
    },
    rolls: {
        heal: { 
            desc: `Heals yourself and mends wounds`,
            roll: '4 2d4',
            func: function(msg, args, char){
                let heal = char.roll(this.roll)
                char.health += heal;
                if(char.health > char.maxhealth)
                    char.health = char.maxhealth
                msg.reply(` has healed ${heal}, they have ${char.health} health!`)},
        },
    },
    health: 16
}