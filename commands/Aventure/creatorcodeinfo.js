const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send(`Bonjour ${message.author.username}, où souhaitez-vous voir les informations sur les codes créateurs?\n\n📄 Dans le salon actuel\n📪 En message privé`)
    await msg.react("📄")
    await msg.react("📪")
    await msg.react("❌")
    const embed = new Discord.MessageEmbed()
    .setTitle("Informations sur les codes créateurs")
    .setDescription(`__C'est quoi un code créateur?__

    Un code créateur est un code contenant que des lettres et chiffres appartenant à un utilisateur du bot.
    
    __Quel est l'utilité d'un code créateur?__
    
    Un code créateur vous permet en tant **qu'utilisateur du bot** de soutenir un autre utilisateur en mettant son code avec la commande \`creatorcode\` ou en tant **qu'utilisateur ayant un code créateur** de recevoir du soutient des autres utilisateurs ayant mis votre code et ainsi profiter des avantages.
    
    __Quels sont les avantages d'avoir un code créateur?__
    
    • Obtenir les soutiens des autres utilisateurs du bot en leur demandant de mettre votre code créateur
    
    • Permet de gagner 5% des dépenses des utilisateurs dans la boutique ayant mis votre code créateur
    
    • Séparation des autres membres en ligne dans le serveur de support avec 2 magnifiques grades
    
    • Votre nom d'utilisateur ainsi que votre code figuront dans une liste spéciale
    
    __Qui peut avoir un code créateur?__
    
    Les utilisateurs ayant aidé au développement du bot seront les seuls à pouvoir obtenir un code créateur. 
    
    __Comment avoir un code créateur?__
    
    Si le créateur du bot (pour savoir c'est qui, faite la commande \`owner\`) trouve que vous avez été utile au développement du bot, il viendra en personne vous contacter en messages privées et vous demandera le nom de votre code créateur. Il se chargera par la suite de rajouter votre code dans le système aventure du bot.`)
    .setThumbnail(message.author.displayAvatarURL())
    const filter = (reaction, user) => {
      return ['📄', '📪', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
      .then(collected => {
        const reaction = collected.first();
    
        if (reaction.emoji.name === '📄') {
            message.channel.send(embed)
            msg.delete()
        } else if (reaction.emoji.name === '📪') {
            msg.delete()
            message.author.send(embed).then(() => message.channel.send("📪 Regardez vos mp!")).catch(() => message.channel.send("Une erreur s'est produite!"))
        } else if (reaction.emoji.name === '❌') {
            msg.reactions.removeAll().catch(error => console.log(`Une erreur est survenue lors de la suppresion des réactions: ${error}`))
          }
    })
}

module.exports.help = {
    name: "creatorcodeinfo",
    alias: "cci",
    description: "Affiche les informations sur les codes créateurs.",
    usage: `creatorcodeinfo`,
    category: "aventure",
    cooldown: 10
}