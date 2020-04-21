module.exports = {
    name: 'choose',
    desc: 'Choose',
    master: true,
    execute(msg, array){
        msg.channel.send('Character Creation\n' +
            "\tRace: Werewolf, Golem, Zombie\n" +
            "\tOrigin: Meatshield, Corpse Hauler, Wizard School Dropout\n" +
            "\tClass: Bannerman, Medic, Gunner Sergent First Class\n" +
            "Roll for Initiative!!!" 
        )
    }
}