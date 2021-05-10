module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    const mentionedUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!mentionedUser) return message.channel.send("Veuillez mentionner un membre à qui attribuer le rôle!")
    const mentionedRole = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
    if(!mentionedRole) return message.channel.send("Veuillez mentionner le rôle à attribuer!")
    if(mentionedUser.roles.cache.find(r => r.id === mentionedRole.id)) return message.channel.send(`Ce membre a déjà le grade **${mentionedRole.name}** !`)
    
    mentionedUser.roles.add(mentionedRole.id).then(() => message.channel.send(`Le rôle ${mentionedRole.name} a bien été attribué à **${mentionedUser.user.username}** !`)).catch(e => {
        console.log(e)
        return message.channel.send("Une erreur s'est produite!")
    })
  };
 
module.exports.help = {
    name: "addrole",
    alias: "ar",
    description: "Rajoute un rôle à un membre.",
    usage: `addrole [user/ID] [role/ID]`,
    category: "modération",
    cooldown: 10
}