const config = require("../../config.json")

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== config.ownerID) return message.channel.send("Seulement mon owner peut utilisé cette commande!")
    message.channel.send("<a:loading:737610504973058048> Redémarrage du bot en cours...").then(() => bot.destroy()).then(() => bot.login(config.token)).then(() => message.channel.send("<:discord:737608731336114176> Redémarrage terminé avec succès!"))
}

module.exports.help = {
    name: "restart",
    alias: "reboot",
    description: "Redémarre le bot.",
    usage: `restart`,
    category: "owner",
    cooldown: 5
}