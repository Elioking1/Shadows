const db = require("quick.db")
const adventure = require("../../database/adventure.json")
const { adventureLogs } = require("../../systems/logs")
const stocks = [
    {
        nom: adventure.bronze,
        number: Math.floor(Math.random() * (3 - 2 + 1) + 2)
    },
    {
        nom: adventure.silver,
        number: Math.floor(Math.random() * 2 + 1)
    },
    {
        nom: adventure.gold,
        number: 1
    }
]
 
module.exports.run = async (bot, message, args) => {
    if(!db.get(`shovel_${message.author.id}`)) return message.reply(`il vous manque une pelle pour creuser!\nVeuillez en construire une!`)
    let random = stocks[Math.floor(Math.random() * stocks.length)]
    if(random.nom == adventure.bronze) db.add(`bronze_${message.author.id}`, random.number)
    else if(random.nom == adventure.silver) db.add(`silver_${message.author.id}`, random.number)
    else if(random.nom == adventure.gold) db.add(`gold_${message.author.id}`, random.number)

    message.channel.send(`**${message.author.username},** vous avez récupéré ${random.number} ${random.nom} en creusant!`)
    adventureLogs(bot, `\`[DIG]\`: ${message.author.tag} vient de récupérer ${random.number} ${random.nom} en creusant!`)
}

module.exports.help = {
    name: "dig",
    description: "Creuse.",
    usage: `dig`,
    category: "aventure",
    cooldown: 7200
}