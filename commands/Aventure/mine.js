const db = require("quick.db")
const adventure = require("../../database/adventure.json")
const { adventureLogs } = require("../../systems/logs")
 
module.exports.run = async (bot, message, args) => {
    if(!db.get(`pick_${message.author.id}`)) return message.reply(`il vous manque une pioche pour piocher des rochers!\nVeuillez en acheter une!`)
    let random = Math.floor(Math.random() * 10 + 1)
    db.add(`stone_${message.author.id}`, random)
    message.channel.send(`**${message.author.username},** vous avez récupéré ${random} ${adventure.stone} en piochant!`)
    adventureLogs(bot, `\`[MINE]\`: ${message.author.tag} vient de récupérer ${random} ${adventure.stone} en piochant!`)
}

module.exports.help = {
    name: "mine",
    description: "Pioche des rochers!",
    usage: `mine`,
    category: "aventure",
    cooldown: 14400
}