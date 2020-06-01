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
                char.traits.set('strength', char.traits.get('strength') + 1)

                msg.channel.send('Mhmmmm jerky')
                char.heal(msg, this.roll)
            },
            roll: '1d4 2'
        },
    }
}