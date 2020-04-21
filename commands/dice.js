module.exports = {
    name: 'dice',
    desc: 'Dovie\'andi se tovya sagain!',
    cooldown: 10,
    execute(msg, array){
        msg.channel.send('Dovie\'andi se tovya sagain!')
    },
    help: (msg)=>{
        msg.channel.send('Dovie\'andi se tovya sagain!')
    }
}