const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!args[0]) return message.channel.send(message.guild.roles.cache.get(db.get(`AutoRole_${message.guild.id}`)) ? `L'autorole du serveur est le rôle **${message.guild.roles.cache.get(db.get(`AutoRole_${message.guild.id}`)).name}** !` : "Le système d'autorole n'a pas été encore configuré!")
    let MentionedRole = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
    if(!MentionedRole) {
        if(args[0] == "reset") {
            if(!db.get(`AutoRole_${message.guild.id}`)) return message.channel.send("L'autorôle n'a pas été configuré!")
            db.set(`AutoRole_${message.guild.id}`, null)
            return message.channel.send("Le système d'autorôle a bien été reset!")
        } else {
            if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Je n'ai pas les permissions suffisantes de mettre en marche l'autorole!")
            return message.channel.send("Veuillez mentionner ou donner l'ID d'un rôle qui sera attribué aux nouveaux membres!")
        }
    }
    if(MentionedRole.id == message.guild.roles.everyone.id) return message.channel.send("Ce rôle ne peut pas être mis en quand qu'autorole!")
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Je n'ai pas les permissions suffisantes de mettre en marche l'autorole!")
    if(MentionedRole.position > message.guild.me.roles.highest.position) return message.channel.send("Ce rôle est au dessus de mes rôles!")
    if(message.guild.roles.cache.get(db.get(`AutoRole_${message.guild.id}`)) && MentionedRole.id == db.get(`AutoRole_${message.guild.id}`).id) return message.channel.send("Ce rôle est déjà configuré en tant qu'autorole!")
    db.set(`AutoRole_${message.guild.id}`, MentionedRole.id)
    message.channel.send(`Le rôle qui sera désormais attribué aux nouveaux membres est ${MentionedRole}!`)
}

module.exports.help = {
    name: "autorole",
    alias: "ar",
    description: "Configure ou reset l'autorôle du serveur.",
    usage: `autorole <role/ID/reset>`,
    category: "configuration",
    cooldown: 15
}