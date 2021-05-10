const db = require("quick.db")
const adventure = require("../../database/adventure.json")
const { adventureLogs } = require("../../systems/logs")

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send("Veuillez mentionner la personne à lui donner des pièces ou son ID!")
    let montant = args.slice(1).join(" ")
    if(!montant) return message.channel.send("Veuiller indiquer un montant de pièces à donner!")
    if(isNaN(montant)) return message.channel.send("Le montant que vous avez mis n'est pas un nombre!")
    if(user.user.id == message.author.id) return message.channel.send("Vous ne pouvez pas donner des pièces à vous même!")
    if(montant <= 0) return message.channel.send(`Vous ne pouvez pas donner moins que 0 ${adventure.coins} à quelqu'un!`)
    if(montant > db.get(`coins_${message.author.id}`)) return message.channel.send("Vous n'avez pas autant de pièces à donner!")
    if(user.user.bot) return message.channel.send("Vous ne pouvez pas donner des pièces à un bot!")
    db.add(`coins_${user.user.id}`, montant)
    db.subtract(`coins_${message.author.id}`, montant)
    message.channel.send(`Vous avez donné à ${user.user.tag} ${montant} ${adventure.coins}!`)
    adventureLogs(bot, `\`[GIVECOINS]\`: ${message.author.tag} vient de donner à ${user.user.tag} ${montant} ${adventure.coins}!`)
}

module.exports.help = {
    name: "give-coins",
    alias: "gc",
    description: "Permet de donner des pièces à quelqu'un.",
    usage: `give-coins [user/ID] [montant]`,
    category: "aventure",
    cooldown: 10
}