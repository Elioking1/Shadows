const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!args[0]) return message.channel.send(message.guild.channels.cache.get(db.get(`leavechannel_${message.guild.id}`)) ? `Le salon d'adieu est ${message.guild.channels.cache.get(db.get(`leavechannel_${message.guild.id}`)).name} !` : "Le salon d'adieu n'a pas été encore configuré!")
    let MentionedChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    if(!MentionedChannel){
        if(args[0] == "reset") {
            if(!db.get(`leavechannel_${message.guild.id}`)) return message.channel.send("Le salon d'adieu n'a pas été configuré!")
            db.set(`leavechannel_${message.guild.id}`, null)
            return message.channel.send("Le système d'adieu a bien été reset!")
        } else {
            return message.channel.send("Veuillez mentionner ou donner l'ID d'un salon qui sera le nouveau salon d'adieu du serveur!")
        }
    }
    if(MentionedChannel.id == db.get(`leavechannel_${message.guild.id}`)) return message.channel.send("Ce salon est déjà configuré en tant que salon d'adieu!")
    if(MentionedChannel.type !== "text") return message.channel.send("Ce salon n'est pas un salon textuel!")
    const permissions = MentionedChannel.permissionsFor(message.guild.me)
    if(!permissions.has("VIEW_CHANNEL")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    if(!permissions.has("SEND_MESSAGES")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    if(!permissions.has("EMBED_LINKS")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    if(!permissions.has("ATTACH_FILES")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    db.set(`leavechannel_${message.guild.id}`, MentionedChannel.id)
    message.channel.send(`Le nouveau salon d'adieu sera ${MentionedChannel.name}!`)
}

module.exports.help = {
    name: "leave-channel",
    alias: "lc",
    description: "Configure ou reset le salon d'adieu du serveur.",
    usage: `leave-channel <channel/ID/reset>`,
    category: "configuration",
    cooldown: 15
}