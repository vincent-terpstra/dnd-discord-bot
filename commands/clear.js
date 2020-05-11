module.exports = {
    name: 'clear',
    desc: 'clears chat logs from the channel',
    cooldown: 10,
    master: true,
    execute(msg, array){
        let amount = array[0] || 2
        msg.channel.bulkDelete(amount, true).catch(
            err=> {console.log(err)}
        )
    }
}