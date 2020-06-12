module.exports = {
    data: {
        name: 'Not-A-Croc-Jerky',
        about: 'mhmmmm tasty',
        jerky: 'eat some jerky to heal.'
    },
    rolls: {
        jerky: {
            limit: 1,
            desc: `Eat some jerky, heal a bit!`,
            func: function(msg, args, char){
                

                msg.channel.send('Mhmmmm jerky')
                char.heal(msg, this.roll)
                char.buff(msg, 'str', 1)
            },
            roll: '1d4 2'
        },
    }
}