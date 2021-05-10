const db = require("quick.db")
const adventure = require("../../database/adventure.json")
const { adventureLogs } = require("../../systems/logs")
 
module.exports.run = async (bot, message, args) => {
    let random = Math.floor(Math.random() * (200 - 50 + 1) + 50)
    db.add(`coins_${message.author.id}`, random)
    message.channel.send(`**${message.author.username},** vous venez de récupérer ${random} ${adventure.coins} de votre récompense quotidienne!`)
    adventureLogs(bot, `\`[DAILY]\`: ${message.author.tag} vient de récupérer ${random} ${adventure.coins} de sa récompense quotidienne!`)
}

module.exports.help = {
    name: "daily",
    description: "Récupère votre récompense quotidienne.",
    usage: `daily`,
    category: "aventure",
    cooldown: 86400
}