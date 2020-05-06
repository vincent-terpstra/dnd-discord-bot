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
                        const tmp = +array[0]
                        const strings = ['super-cooled', 'freezing', 'cool', 'mild', 'warm', 'hot', 'over-heated']
                        let golem = sheet[1].about.get('golem')
                        let diff = tmp - golem.temp;
                        golem.temp = tmp
                        
                        let traits = sheet[1].traits;
                        traits.set('intelligence', traits.get('intelligence') - diff)
                        traits.set('strength', traits.get('strength') + diff)
                        
                        golem.data.temperature = `${strings[tmp + 3]} int(${-tmp}) str(${tmp})`
                    }
            }
        )
    }
}