module.exports = {
    name: 'purge',
    desc: 'removes chat logs from the channel',
    cooldown: 10,
    master: true,
    execute(msg, array){
        console.log(array)
        let amount = array[0] || 2
        msg.channel.bulkDelete(amount, true).catch(
            err=> {console.log(err)}
        )
    }
}