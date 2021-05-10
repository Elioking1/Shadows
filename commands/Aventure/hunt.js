const adventure = require("../../database/adventure.json")
const db = require("quick.db")
const { adventureLogs } = require("../../systems/logs")
 
module.exports.run = async (bot, message, args) => {
    if(!db.get(`pistol_${message.author.id}`)) return message.reply("il vous manque un pistolet pour partir chasser!\nAller en acheter un!")
    if(!db.get(`sword_${message.author.id}`)) {
    let random = Math.floor(Math.random() * (100 - 50 + 1) + 50)
    db.add(`coins_${message.author.id}`, random)
    message.channel.send(`**${message.author.username},** vous venez de récupérer ${random} ${adventure.coins} en chassant!`)
    adventureLogs(bot, `\`[HUNT]\`: ${message.author.tag} vient de récupérer ${random} ${adventure.coins} en chassant!`)
    } else if(db.get(`sword_${message.author.id}`)) {
        let random = Math.floor(Math.random() * (100 - 50 + 1) + 50)
        let random2 = Math.floor(Math.random() * 2 + 1)
        db.add(`coins_${message.author.id}`, random)
        db.add(`peau_${message.author.id}`, random2)
        message.channel.send(`**${message.author.username},** vous venez de récupérer ${random} ${adventure.coins} et ${random2} ${adventure.peau} en chassant!`)
        adventureLogs(bot, `\`[HUNT]\`: ${message.author.tag} vient de récupérer ${random} ${adventure.coins} et ${random2} ${adventure.peau} en chassant!`)
        }
}

module.exports.help = {
    name: "hunt",
    description: "Chasse.",
    usage: `hunt`,
    category: "aventure",
    cooldown: 7200
}