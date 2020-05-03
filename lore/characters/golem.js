module.exports = {
    data: {
        name: 'Golem',
        about: `A constructed creature of living clay, Golems are often used as workers in high intensity areas like forges. This has caused the rumor that Golems are quite stupid. A remote monestary in the Alpines has proven this incorrect, with Golem minds answering questions such as the meaning of life, and the dangers of AI.`,
        flaw: 'Silicon Form - your physical vs. mental range from +2 to -2 depending on temperature\n'+
            '\tHeat makes you strong and dumb, while cold makes you weaker yet smarter',
        living_clay: 'Allows the Golem to heal themself',
        weather: 'warm (int -1, str +1)'
    },
    rolls: {
        clay: { 
            desc: `Heals yourself and mends wounds`,
            roll: 'con 2d4 4',
            limit: 3,
            func: function(msg, args, char){
                let heal = char.dice(this.roll)
                char.health += heal[0];
                if(char.health > char.maxhealth)
                    char.health = char.maxhealth
                msg.reply(` has healed ${heal[0]}${heal[1]}! They have ${char.health} health!`)},
        },
    },
    buff: {'int':-1, 'str': 1},
    health: 16
}