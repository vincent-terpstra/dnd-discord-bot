module.exports = {
    name: 'roll',
    desc: 'rolls the dice',
    usage: '<[1,20]dxx ...>',
    cooldown: 0.1,
    execute(msg, array){
        if(array.length == 0 || array.length > 10){
          array = [`1d20`]
        }
        try {
            let reply = ""
            let total = 0
            for(var i = 0; i < array.length; i++){
              let values = array[i].split('d')
              let sub = 0;
              if(values[0] <= 20 && values[0] >= 1)
              for(let roll = 0; roll < values[0]; roll++){
                  let r = Math.floor(values[1] * Math.random()) + 1
                  sub += r;
              }
              total += sub
              reply += "\t" + sub + " (" + array[i] + ")\n"
            }
            msg.reply("rolled: " + total + "!\n" +reply)
          } catch(ex){
          }
    }
}