module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    if(!channel) return message.channel.send("Veuillez mentionner ou donner l'ID du salon ou de la catégorie à supprimer!")
    const msg = await message.channel.send(`Suppression ${channel.type == "category" ? "de la catégorie" : `du salon ${channel.type == "text" ? "textuel" : "vocal"}`} en cours...`)
    channel.delete().then(deleted => {
        msg.delete()
        message.channel.send(`✅ ${channel.type == "category" ? "La catégorie" : `Le salon ${channel.type == "text" ? "textuel" : "vocal"}`} ${deleted.name} a bien été supprimé avec succès!`)
    }).catch(e => {
        msg.delete()
        message.channel.send("Une erreur s'est produite!")
        console.log(e)
    })
}

module.exports.help = {
    name: "deletechannel",
    alias: "dc",
    description: "Supprime un salon textuel ou vocal ou une catégorie.",
    usage: `deletechannel [channel/ID]`,
    category: "administration",
    cooldown: 10
}