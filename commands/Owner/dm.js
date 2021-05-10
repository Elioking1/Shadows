const config = require("../../config.json")

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== config.ownerID) return message.channel.send("Seulement mon owner peut utilisé cette commande!")
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send("Veuillez mentionner la personne à lui envoyer un mp ou son ID!")
    let dmmsg = args.slice(1).join(" ")
    if(!dmmsg) return message.channel.send("Veuillez rédiger le message!")
    user.user.send(dmmsg).then(() => message.channel.send(`J'ai envoyé le mp à ${user.user.tag}!`)).catch(() => message.channel.send("Je n'ai pas pu mp cette utilisateur!"))
}

module.exports.help = {
    name: "dm",
    alias: "mp",
    description: "Permet d'envoyer un message privé au membre.",
    usage: `dm [user/ID] [texte]`,
    category: "owner",
    cooldown: 5
}