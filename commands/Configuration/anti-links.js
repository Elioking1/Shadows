const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    let checkal = db.get(`antiliens_${message.guild.id}`)
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!args[0]) return message.channel.send(`Le système d'anti lien est ${checkal == "on" ? "**activé**" : "**désactivé**"} sur le serveur!`)
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    let system = [
        "on",
        "off"
    ]
    if(!system.includes(args[0])) return;
    if(args == "on") {
        if(checkal == "on") return message.channel.send("Le système d'anti lien est déjà activé!")
        db.set(`antiliens_${message.guild.id}`, true)
        message.channel.send("<a:yes:717000395142070353> Le système d'anti lien a été mis en marche avec succès!")
    }
    if(args == "off") {
        if(checkal == "off") return message.channel.send("Le système d'anti lien est déjà désactivé!")
        db.set(`antiliens_${message.guild.id}`, null)
        message.channel.send("<a:yes:717000395142070353> Le système d'anti lien a été désactivé avec succès!")
    }
}

module.exports.help = {
    name: "anti-links",
    alias: "al",
    description: "Configure l'activation ou la désactivation du système d'anti lien.",
    usage: `anti-links <off/on>`,
    category: "configuration",
    cooldown: 15
}