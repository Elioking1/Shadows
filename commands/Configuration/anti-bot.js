const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    let checkab = db.get(`antibots_${message.guild.id}`)
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!args[0]) return message.channel.send(`Le système d'anti bot est ${checkab == "on" ? "**activé**" : "**désactivé**"} sur le serveur!`)
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    let system = [
        "on",
        "off"
    ]
    if(!system.includes(args[0])) return;
    if(args == "on") {
        if(checkab == "on") return message.channel.send("Le système d'anti bot est déjà activé!")
        db.set(`antibots_${message.guild.id}`, true)
        message.channel.send("<a:yes:717000395142070353> Le système d'anti bot a été mis en marche avec succès!")
    }
    if(args == "off") {
        if(checkab == "off") return message.channel.send("Le système d'anti bot est déjà désactivé!")
        db.set(`antibots_${message.guild.id}`, null)
        message.channel.send("<a:yes:717000395142070353> Le système d'anti bot a été désactivé avec succès!")
    }
}

module.exports.help = {
    name: "anti-bot",
    abias: "ab",
    description: "Configure l'activation ou la désactivation du système d'anti bot.",
    usage: `anti-bot <off/on>`,
    category: "configuration",
    cooldown: 15
}