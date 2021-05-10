const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!args[0]) return message.channel.send(message.guild.channels.cache.get(db.get(`welcomechannel_${message.guild.id}`)) ? `Le salon de bienvenue est ${message.guild.channels.cache.get(db.get(`welcomechannel_${message.guild.id}`)).name} !` : "Le salon de bienvenue n'a pas été encore configuré!")
    let MentionedChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    if(!MentionedChannel){
        if(args[0] == "reset") {
            if(!db.get(`welcomechannel_${message.guild.id}`)) return message.channel.send("Le salon de bienvenue n'a pas été configuré!")
            db.set(`welcomechannel_${message.guild.id}`, null)
            return message.channel.send("Le système de bienvenue a bien été reset!")
        } else {
            return message.channel.send("Veuillez mentionner ou donner l'ID un salon qui sera le nouveau salon de bienvenue du serveur!")
        }
    }
    if(MentionedChannel.id == db.get(`welcomechannel_${message.guild.id}`)) return message.channel.send("Ce salon est déjà configuré en tant que salon de bienvenue!")
    if(MentionedChannel.type !== "text") return message.channel.send("Ce salon n'est pas un salon textuel!")
    const permissions = MentionedChannel.permissionsFor(message.guild.me)
    if(!permissions.has("VIEW_CHANNEL")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    if(!permissions.has("SEND_MESSAGES")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    if(!permissions.has("EMBED_LINKS")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    if(!permissions.has("ATTACH_FILES")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    db.set(`welcomechannel_${message.guild.id}`, MentionedChannel.id)
    message.channel.send(`Le nouveau salon de bienvenue sera ${MentionedChannel}!`)
}

module.exports.help = {
    name: "welcome-channel",
    alias: "wc",
    description: "Configure ou reset le salon de bienvenue du serveur.",
    usage: `welcome-channel <channel/ID/reset>`,
    category: "configuration",
    cooldown: 15
}