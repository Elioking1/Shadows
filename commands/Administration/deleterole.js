module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
    if(!role) return message.channel.send("Veuillez mentionner ou donner l'ID du rôle à supprimer!")
    const msg = await message.channel.send("Suppression du rôle en cours...")
    role.delete().then(deleted => {
        msg.delete()
        message.channel.send(`✅ Le rôle ${deleted.name} a bien été supprimé avec succès!`)
    }).catch(e => {
        msg.delete()
        message.channel.send("Une erreur s'est produite!")
        console.log(e)
    })
}

module.exports.help = {
    name: "deleterole",
    alias: "dr",
    description: "Supprime un rôle discord.",
    usage: `deleterole [role/ID]`,
    category: "administration",
    cooldown: 10
}