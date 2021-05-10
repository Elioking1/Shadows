const db = require("quick.db")
const adventure = require("../../database/adventure.json")
const { adventureLogs } = require("../../systems/logs")
 
module.exports.run = async (bot, message, args) => {
    if(!db.get(`battery_${message.author.id}`)) return message.reply(`il vous manque une batterie afin de stocker de l'énergie!\nVeuillez en acheter une!`)
    let random = Math.floor(Math.random() * 2 + 1)
    db.add(`energy_${message.author.id}`, random)
    message.channel.send(`**${message.author.username},** vous venez de recharger votre batterie ${random} ${adventure.energy}!`)
    adventureLogs(bot, `\`[RECHARGE]\`: ${message.author.tag} vient de recharger sa batterie ${random} ${adventure.energy}!`)
}

module.exports.help = {
    name: "recharge",
    description: "Recharge de l'énergie.",
    usage: `recharge`,
    category: "aventure",
    cooldown: 7200
}