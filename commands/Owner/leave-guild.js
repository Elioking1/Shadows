const config = require("../../config.json")

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== config.ownerID) return message.channel.send("Seulement mon owner peut utilisé cette commande!")
    if(!args[0]) return message.channel.send("Veuillez mettre l'ID d'un serveur!")
    let guildID = args[0]
    let guild = bot.guilds.cache.get(guildID)
    message.channel.send("Je vais quitter le serveur dans 3 secondes!")
    setTimeout(() => guild.leave(), 3000)
}

module.exports.help = {
    name: "leave-guild",
    alias: "lg",
    description: "Quitte un serveur.",
    usage: `leave-guild [ID]`,
    category: "owner",
    cooldown: 5
}