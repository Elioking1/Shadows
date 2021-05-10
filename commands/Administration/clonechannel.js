module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Je n'ai pas la permission de faire cela!")
    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])|| message.channel
    const msg = await message.channel.send("Clonage du salon en cours...")
    channel.clone().then(() => {
        msg.delete()
        message.channel.send(`✅ Le salon ${channel.name} a bien été cloné avec succès!`)
    }).catch(e => {
        msg.delete()
        message.channel.send("Une erreur s'est produite!")
        console.log(e)
    })
}

module.exports.help = {
    name: "clonechannel",
    description: "Clone un salon.",
    usage: `clonechannel <channel/ID>`,
    category: "administration",
    cooldown: 10
}