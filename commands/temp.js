const { characterSheets } = require('./character.js')

module.exports = {
    name: 'temp',
    desc: 'Sets the golem\s temperature',
    usage: '<val>',
    cooldown: 1,
    master: true,
    execute(msg, array){
        if(array.length > 0 && array[0] >= -3 && array[0] <= 3)
        Array.from(characterSheets).map(
                sheet=>{
                    if(sheet[1].about.has('golem')){
                        const val = +array[0]

                        let tmp = +array[0]
                        if(tmp == 3 || tmp == -3)
                            tmp = (tmp / 3) * 5
                        const strings = ['super-cooled', 'freezing', 'cool', 'mild', 'warm', 'hot', 'over-heated']
                        let golem = sheet[1].about.get('golem')
                        let diff = tmp - golem.temp;
                        golem.temp = tmp
                        
                        if(diff == 0) return;
                        let traits = sheet[1].traits;
                        
                        let data = `${strings[val + 3]}! int(${-tmp}) str(${tmp})`
                        golem.data.temperature = data
                        msg.channel.send(`${sheet[1].username} is now ${strings[val + 3]}!`)
                        
                        sheet[1].buff(msg, 'int', -diff)
                        sheet[1].buff(msg, 'str', diff)
                        
                        
                    }
            }
        )
    }
}