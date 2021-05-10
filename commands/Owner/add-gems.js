const db = require("quick.db")
const adventure = require("../../database/adventure.json")
const config = require("../../config.json")

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== config.ownerID) return message.channel.send("Seulement mon owner peut utilisé cette commande!")
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send("Veuillez mentionner la personne à lui rajouter des gemmes ou son ID!")
    let montant = args.slice(1).join(" ")
    if(!montant) return message.channel.send("Veuiller indiquer un montant de gemmes à rajouter!")
    if(isNaN(montant)) return message.channel.send("Le montant que vous avez mis n'est pas un nombre!")
    const channel = bot.channels.cache.get("750047207071416471")
    function logs(name) {
        channel.send(`${message.author.tag} vient de rajouter à ${name}!`)
    }
    db.add(`gems_${user.user.id}`, montant)
    message.channel.send(`Vous avez rajouté à ${user.user.tag} ${montant} ${adventure.gems}!`)
    logs(`${user.user.tag} ${montant} ${adventure.gems}`)
}

module.exports.help = {
    name: "add-gems",
    alias: "ag",
    description: "Permet de rajouter des gemmes à quelqu'un.",
    usage: `add-gems [user/ID] [montant]`,
    category: "owner",
    cooldown: 10
}