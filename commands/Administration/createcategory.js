module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Je n'ai pas la permission de faire cela!")
    let nom = args.join(" ")
    if(!nom) return message.channel.send("Veuiller rédiger le nom du salon vocal à créer!")
    const msg = await message.channel.send("Création du salon en cours...")
    message.guild.channels.create(nom, { type: "category" }).then(() => {
        msg.delete()
        message.channel.send(`✅ La catégorie ${nom} a bien été créé avec succès!`)
    }).catch(e => {
        msg.delete()
        message.channel.send("Une erreur s'est produite!")
        console.log(e)
    })
}

module.exports.help = {
    name: "createcategory",
    alias: "cc",
    description: "Crée un salon vocal.",
    usage: `createcategory [nom de la catégorie]`,
    cooldown: 10
}