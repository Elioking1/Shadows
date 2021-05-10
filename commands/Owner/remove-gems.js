const adventure = require("../../database/adventure.json")
const db = require("quick.db")
const config = require("../../config.json")

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== config.ownerID) return message.channel.send("Seulement mon owner peut utilisé cette commande!")
    if(!user) return message.channel.send("Veuillez mentionner la personne à lui rajouter des gemmes ou son ID!")
    let montant = args.slice(1).join(" ")
    if(!montant) return message.channel.send("Veuiller indiquer un montant de gemmes à rajouter!")
    if(isNaN(montant)) return message.channel.send("Le montant que vous avez mis n'est pas un nombre!")
    if(db.get(`gems_${user.user.id}`) < montant) return message.channel.send("L'utilisateur mentionné n'a pas autant de gemmes!")
    db.subtract(`gems_${user.user.id}`, montant)
     message.channel.send(`Vous avez supprimé à ${user.user.tag} ${montant} ${adventure.gems}!`)
}

module.exports.help = {
    name: "remove-gems",
    alias: "rg",
    description: "Permet de supprimer des gemmes à quelqu'un.",
    usage: `remove-gems [user/ID] [montant]`,
    category: "owner",
    cooldown: 10
}