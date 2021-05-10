const db = require("quick.db")
const adventure = require("../../database/adventure.json")
const { adventureLogs } = require("../../systems/logs")
const fishs = [
    {
        nom: adventure.sardine,
        number: Math.floor(Math.random() * (5 - 2 + 1) + 2)
    },
    {
        nom: adventure.fugu,
        number: Math.floor(Math.random() * 4 + 1)
    },
    {
        nom: adventure.fishpapillon,
        number: Math.floor(Math.random() * 3 + 1)
    },
    {
        nom: adventure.clownfish,
        number: Math.floor(Math.random() * 2 + 1)
    },
    {
        nom: adventure.whale,
        number: 1
    },
    {
        nom: adventure.shark,
        number: 1
    }
]
 
module.exports.run = async (bot, message, args) => {
    if(!db.get(`pick_${message.author.id}`)) return message.reply(`il vous manque une canne à pêche pour pêcher!\nVeuillez en acheter une!`)
    let randomfish = fishs[Math.floor(Math.random() * fishs.length)]
    if(randomfish.nom == adventure.sardine) db.add(`sardine_${message.author.id}`, randomfish.number)
    else if(randomfish.nom == adventure.fugu) db.add(`fugu_${message.author.id}`, randomfish.number)
    else if(randomfish.nom == adventure.fishpapillon) db.add(`fishpapillon_${message.author.id}`, randomfish.number)
    else if(randomfish.nom == adventure.clownfish) db.add(`clownfish_${message.author.id}`, randomfish.number)
    else if(randomfish.nom == adventure.whale) db.add(`whale_${message.author.id}`, randomfish.number)
    else if(randomfish.nom == adventure.shark) db.add(`shark_${message.author.id}`, randomfish.number)

    message.channel.send(`**${message.author.username},** vous avez pêché ${randomfish.number} ${randomfish.nom}!`)
    adventureLogs(bot, `\`[FISH]\`: ${message.author.tag} vient de pêcher ${randomfish.number} ${randomfish.nom}!`)
}

module.exports.help = {
    name: "fish",
    description: "Pêche.",
    usage: `fish`,
    category: "aventure",
    cooldown: 3600
}