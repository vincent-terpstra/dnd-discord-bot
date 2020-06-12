module.exports = {
    data: {
        name: 'Minime',
        about: 'Like you but smaller\n\tYour stats (-4), control with int checks',
        effect: 'Ever see \"Guardians of the Galaxy\"? Think Baby Groot'
    },
    rolls: {
        headbutt: {
            actor: 'Mini golem',
            limit: 3,
            desc: `Mini golem attacks, charging and headbutting`,
            verb: `charges! I AM Golem!!`,
            roll: `1d6 str -4`
        },
        minime: {
            desc: 'creates a miniature version of yourself from a limb',
            func: function(msg, args, char){
                if(char.minis < 4){
                    char.minis++;
                    msg.channel.send(`I AM Golem!!! (x${char.minis})`)
                    char.buff(msg, 'str', -1)
                    char.buff(msg, 'int', -1);
                }
            }
        },
        absorb: {
            desc: 'absorbs a miniature version of yourself into a limb',
            func: function(msg, args, char){
                if(char.minis > 0){
                    char.minis--;
                    msg.channel.send(`I am ONE! (x${char.minis})`)
                    char.buff(msg, 'str', 1)
                    char.buff(msg, 'int', 1);
                }
            }
        }
    }
}