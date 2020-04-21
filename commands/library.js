const library = require('../library/library.js')

module.exports = {
    name: 'library',
    desc: 'A library of Knowledge',
    cooldown: 10,
    master: true,
    execute(msg, array){
        msg.author.send("Keys in library\n" + Object.keys(library));
    }
}