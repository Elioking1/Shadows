const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("Server Info")
    .addField("👑 <:doublefleche:773257544570765312> Nom + ID", `\`\`\`Nom: ${message.guild.name}\nID: ${message.guild.id}\nNom du propriétaire: ${message.guild.owner.user.tag}\nID du propriétaire: ${message.guild.ownerID}\`\`\``)
    .addField("⚙️ <:doublefleche:773257544570765312> Paramètres", `\`\`\`Région: ${message.guild.region}\nNiveau de vérification: ${message.guild.verificationLevel}\nSalon AFK: ${message.guild.afkChannel === null ? "❌" : message.guild.afkChannel.name}\nDescription: ${message.guild.description === null ? "❌" : message.guild.description}\nURL Personnalisé: ${message.guild.vanityURLCode === null ? "❌" : message.guild.vanityURLCode}\`\`\``) 
    .addField("<:partenaire:737605162067165184> <:doublefleche:773257544570765312> Caractéristiques", `\`\`\`Grand serveur: ${message.guild.large === false ? "❌" : "✅"}\nPartenaire: ${message.guild.partnered === false ? "❌" : "✅"}\nVérifié: ${message.guild.verified === false ? "❌" : "✅"}\`\`\``)
    .addField("🔴 <:doublefleche:773257544570765312> Présences", `\`\`\`En ligne: ${message.guild.members.cache.filter(member => member.presence.status == "online").size}\nInactif: ${message.guild.members.cache.filter(member => member.presence.status == "idle").size}\nNe pas déranger: ${message.guild.members.cache.filter(member => member.presence.status == "dnd").size}\nHors-ligne/Invisible: ${message.guild.members.cache.filter(member => member.presence.status == "offline").size}\`\`\``)
    .addField("📈 <:doublefleche:773257544570765312> Statistiques", `\`\`\`Création: ${moment(message.guild.createdAt).format('DD/MM/YYYY | hh:mm:ss')}\nDate d'arrivée: ${moment(message.guild.joinedAt).format('DD/MM/YYYY | hh:mm:ss')}\nNombre de membres: ${message.guild.memberCount}\nNombre de boosts: ${message.guild.premiumSubscriptionCount}\nNombre de salons textuels: ${message.guild.channels.cache.filter(ch => ch.type === "text").size}\nNombre de salons vocaux: ${message.guild.channels.cache.size - (message.guild.channels.cache.filter(ch => ch.type === "text").size + message.guild.channels.cache.filter(ch => ch.type === "category").size + message.guild.channels.cache.filter(ch => ch.type === "news").size)}\nNombre de catégories: ${message.guild.channels.cache.filter(ch => ch.type === "category").size}\nNombre de salons news: ${message.guild.channels.cache.filter(ch => ch.type === "news").size}\nNombre de rôles: ${message.guild.roles.cache.size}\nNombre d'émojis: ${message.guild.emojis.cache.size}\`\`\``)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    message.channel.send(embed)
}

module.exports.help = {
    name: "serverinfo",
    alias: "si",
    description: "Affiche les informations du serveur actuel.",
    usage: `serverinfo`,
    category: "informations",
    cooldown: 5
}