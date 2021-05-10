const adventure = require("../../database/adventure.json")
const db = require("quick.db")
const config = require("../../config.json")

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== config.ownerID) return message.channel.send("Seulement mon owner peut utilisé cette commande!")
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send("Veuillez mentionner la personne à lui rajouter des pièces ou son ID!")
    let montant = args.slice(1).join(" ")
    if(!montant) return message.channel.send("Veuiller indiquer un montant de pièces à rajouter!")
    if(isNaN(montant)) return message.channel.send("Le montant que vous avez mis n'est pas un nombre!")
    if(db.get(`coins_${user.user.id}`) < montant) return message.channel.send("L'utilisateur mentionné n'a pas autant de pièces!")
    db.subtract(`coins_${user.user.id}`, montant) 
    message.channel.send(`Vous avez supprimé à ${user.user.tag} ${montant} ${adventure.coins}!`)
}

module.exports.help = {
    name: "remove-coins",
    alias: "rc",
    description: "Permet de supprimer des pièces à quelqu'un.",
    usage: `remove-coins [user/ID] [montant]`,
    category: "owner",
    cooldown: 10
}