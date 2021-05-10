module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    let rolename = args[0]
    if(!rolename) return message.channel.send("Veuillez rédiger le nom du rôle à créer!")
    let rolecolor = args[1] || "#FFFFFF"
    const msg = await message.channel.send("Création du rôle en cours...")
    message.guild.roles.create({
        data: {
            name: rolename,
            color: rolecolor
        }
    }).then(() => {
        msg.delete()
        message.channel.send(`✅ Le rôle ${rolename} a bien été créé avec succès!`)
    }).catch(e => {
        msg.delete()
        message.channel.send("Une erreur s'est produite!")
        console.log(e)
    })
}

module.exports.help = {
    name: "createrole",
    alias: "cr",
    description: "Crée un rôle discord.",
    usage: `createrole [nom] <couleur HEX>`,
    example: "createrole Membre #0043ad",
    category: "administration",
    cooldown: 10
}