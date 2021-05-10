const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    const MentionedRole = message.mentions.roles.first()
    if(!MentionedRole) return message.channel.send("Veuillez mentionner un rôle!")
    let embed = new Discord.MessageEmbed()
    .setTitle("Role Info")
    .addField("👑 <:doublefleche:773257544570765312> Nom + ID", `\`\`\`Nom: ${MentionedRole.name}\nID: ${MentionedRole.id}\`\`\``)
    .addField("🔴 <:doublefleche:773257544570765312> Caractéristiques", `\`\`\`Couleur: ${MentionedRole.hexColor}\nModifiable: ${MentionedRole.editable === false ? "❌" : "✅"}\`\`\``)
    .addField("📈 <:doublefleche:773257544570765312> Statistiques", `\`\`\`Création: ${moment(MentionedRole.createdAt).format('DD/MM/YYYY | hh:mm:ss')}\nHoist: ${MentionedRole.hoist === false ? "❌" : "✅"}\nMentionnable: ${MentionedRole.mentionable === false ? "❌" : "✅"}\nNombre de membres ayant le rôle: ${MentionedRole.members.size}\nPosition: ${MentionedRole.position}\`\`\``)
    message.channel.send(embed)
}

module.exports.help = {
    name: "roleinfo",
    alias: "ri",
    description: "Affiche les informations du rôle mentionné.",
    usage: `roleinfo [role]`,
    category: "informations",
    cooldown: 7
}