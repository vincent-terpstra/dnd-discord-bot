module.exports = {
    data: {
        name: 'Golem',
        about: `A constructed creature of living clay, Golems are often used as workers in high intensity areas like forges. This has caused the rumor that Golems are quite stupid. A remote monestary in the Alpines has proven this incorrect, with Golem minds answering questions such as the meaning of life, and the dangers of AI.`,
        flaw: 'Silicon Form - your physical vs. mental range from +2 to -2 depending on temperature\n'+
            '\tHeat makes you strong and dumb, while cold makes you weaker yet smarter',
        living_clay: 'Allows the Golem to heal themself',
        temperature: 'mild +0'
    },
    rolls: {
        clay: { 
            desc: `Heals yourself and mends wounds`,
            roll: 'con 2d4 2',
            limit: 3,
            func: function(msg, args, char){
                msg.reply(`has been reformed!`)
                char.heal(msg, this.roll )
            },
        },
    },
    temp: 0,
    health: 16
}