const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Statut du bot")
    .setDescription(`Voici les statuts des différentes fonctions du bot:`)
    .addField("<a:online:737604575015469099> | Administration", `\`Opérationnel\``, true)
    .addField("<a:online:737604575015469099> | Aventure", `\`Opérationnel\``, true)
    .addField("<a:online:737604575015469099> | Configuration", `\`Opérationnel\``, true)
    .addField("<a:online:737604575015469099> | Fun", `\`Opérationnel\``, true)
    .addField("<a:online:737604575015469099> | Images", `\`Opérationnel\``, true)
    .addField("<a:online:737604575015469099> | Informations", `\`Opérationnel\``, true)
    .addField("<a:online:737604575015469099> | Modération", `\`Opérationnel\``, true)
    .addField("<a:online:737604575015469099> | NSFW", `\`Opérationnel\``, true)
    .addField("<a:online:737604575015469099> | Owner", `\`Opérationnel\``, true)
    .addField("<a:online:737604575015469099> | Social", `\`Opérationnel\``, true)
    .addField("<a:online:737604575015469099> | Utilité", `\`Opérationnel\``, true)
    .setImage("https://cdn.discordapp.com/attachments/714096850256527361/736962102492659752/Menudesstatisques.png")
    message.channel.send(embed)
}

module.exports.help = {
    name: "status",
    description: "Affiche les statuts des différentes fonctions du bot.",
    usage: `status`,
    category: "informations",
    cooldown: 10
  }