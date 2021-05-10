const adventure = require("../../database/adventure.json")
const db = require("quick.db")
const { adventureLogs } = require("../../systems/logs")
 
module.exports.run = async (bot, message, args) => {
    if(!db.get(`axe_${message.author.id}`)) return message.reply(`il vous manque une hache afin de couper du bois!\nVeuillez en acheter une!`)
    let random = Math.floor(Math.random() * 10 + 1)
    db.add(`wood_${message.author.id}`, random)
    message.channel.send(`**${message.author.username},** vous avez récupéré ${random} ${adventure.wood} en coupant du bois!`)
    adventureLogs(bot, `\`[WOOD]\`: ${message.author.tag} vient de récupérer ${random} ${adventure.wood} en coupant du bois !`)
}

module.exports.help = {
    name: "wood",
    description: "Coupe du bois.",
    usage: `wood`,
    category: "aventure",
    cooldown: 14400
}