const adventure = require("../../database/adventure.json")
const db = require("quick.db")
const { adventureLogs } = require("../../systems/logs")

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send("Veuillez mentionner la personne à lui donner des gemmes ou son ID!")
    let montant = args.slice(1).join(" ")
    if(!montant) return message.channel.send("Veuiller indiquer un montant de gemmes à donner!")
    if(isNaN(montant)) return message.channel.send("Le montant que vous avez mis n'est pas un nombre!")
    if(user.user.id == message.author.id) return message.channel.send("Vous ne pouvez pas donner des gemmes à vous même!")
    if(montant <= 0) return message.channel.send(`Vous ne pouvez pas donner moins que 0 ${adventure.gems} à quelqu'un!`)
    if(montant > db.get(`gems_${message.author.id}`)) return message.channel.send("Vous n'avez pas autant de gemmes à donner!")
    if(user.user.bot) return message.channel.send("Vous ne pouvez pas donner des gemmes à un bot!")
    db.add(`gems_${user.user.id}`, montant)
    db.subtract(`gems_${message.author.id}`, montant)
    message.channel.send(`Vous avez donné à ${user.user.tag} ${montant} ${adventure.gems}!`)
    adventureLogs(bot, `\`[GIVEGEMS]\`: ${message.author.tag} vient de donner à ${user.user.tag} ${montant} ${adventure.gems}!`)
}

module.exports.help = {
    name: "give-gems",
    alias: "gg",
    description: "Permet de donner des gemmes à quelqu'un.",
    usage: `give-gems [user/ID] [montant]`,
    category: "aventure",
    cooldown: 10
}