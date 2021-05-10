const config = require("../../config.json")

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== config.ownerID) return message.channel.send("Seulement mon owner peut utilisé cette commande!")
	message.channel.send("Le bot est éteint...").then(() => bot.destroy())
}

module.exports.help = {
    name: "shutdown",
    alias: "off",
    alias2: "kill",
    description: "Arrête le bot.",
    usage: `shutdown`,
    category: "owner",
    cooldown: 10
}