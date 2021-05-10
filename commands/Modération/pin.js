module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    let msg = message.channel.messages.cache.get(args[0])
    if(!msg) return message.channel.send("Le message à épingler est introuvable!")
    msg.pin().then(() => message.channel.send("Le message a bien été épinglé avec succès!")).catch(() => message.channel.send("Une erreur s'est produite!"))
}

module.exports.help = {
    name: "pin",
    description: "Épingle un message.",
    usage: `pin [ID du message]`,
    category: "modération",
    cooldown: 5
}