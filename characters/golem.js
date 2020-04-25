module.exports = {
    name: 'golem',
    data: {
    name: 'Golem',
    about: `A constructed creature of living clay, Golems are often used as workers in high intensity areas like forges. This has caused the rumor that Golems are quite stupid. A remote monestary in the Alpines has proven this incorrect, with Golem minds answering questions such as the meaning of life, and the dangers of AI.`,
    flaw: 'Silicon Form: your dex + str vs. wis + int range from +2 to -2 depending on temperature\n'+
        '\tHeat makes you strong and dumb, while cold makes you weaker yet smarter'
    },
    rolls: {
        heal: { 
            desc: `Heals yourself and mends wounds`,
            func: function(msg, args){
                msg.reply(`(golem) has healed ${4 + 2 * Math.floor(Math.random() * 4)}`)},
        },
    },
    health: 16
}