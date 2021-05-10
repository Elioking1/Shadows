const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Je n'ai pas les permissions suffisantes")
    if(db.get(`lock_${message.channel.id}`) == "on") return message.channel.send("Le salon est déjà vérouillé!")

    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false
    })
    message.channel.send(`🔒**${message.author.username},** le salon a été vérouillé avec succès!`)
    db.set(`lock_${message.channel.id}`, "on")
}

module.exports.help = {
    name: "lockdown",
    alias: "lock",
    description: "Vérouille le salon actuel.",
    usage: `lockdown`,
    category: "modération",
    cooldown: 15
}