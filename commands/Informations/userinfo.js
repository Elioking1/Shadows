const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    const MentionedUser = message.mentions.users.first() || message.author;
    const MentionedMember = message.mentions.members.first() || message.member;
    let status = "";
if(MentionedUser.presence.status === "online") status = "En Ligne";
else if(MentionedUser.presence.status === "idle") status = "Inactif";
else if(MentionedUser.presence.status === "offline") status = "Hors Ligne/Invisible";
else if(MentionedUser.presence.status === "dnd") status = "Ne pas déranger";

function getPermission(permission) {
    let permstat = ""
    if(MentionedMember.hasPermission(permission)) permstat = "✅"
    else permstat = "❌"
    return permstat
}

    let embed = new Discord.MessageEmbed()
    .setTitle(`Informations sur ${MentionedUser.username}`)
    .setThumbnail(MentionedUser.displayAvatarURL({dynamic: true}))
    .addField("👑 <:doublefleche:773257544570765312> Nom + ID", `\`\`\`Nom: ${MentionedUser.username}\nDescriminateur: #${MentionedUser.discriminator}\nID: ${MentionedUser.id}\nPseudo: ${MentionedMember.nickname ? MentionedMember.nickname : "Aucun"}\`\`\``)
    .addField("<:partenaire:737605162067165184> <:doublefleche:773257544570765312> Caractéristiques", `\`\`\`Bot: ${MentionedUser.bot ? "✅" : "❌"}\`\`\``)
    .addField("📈 <:doublefleche:773257544570765312> Statistiques", `\`\`\`Création: ${moment(MentionedUser.createdAt).format('DD/MM/YYYY | hh:mm:ss')}\nDate d'arrivée: ${moment(MentionedUser.presence.guild.joinedAt).format('DD/MM/YYYY | hh:mm:ss')}\nStatut: ${status}\nNombre de rôles: ${MentionedMember.roles.cache.size}\nEn train d'écrire: ${MentionedUser.typingIn(message.channel) ? "✅" : "❌"}\nEn vocal: ${MentionedMember.voice.channel === null ? "❌" : "✅"}\`\`\``)
    .addField("🔨 <:doublefleche:773257544570765312> Permissions", `\`\`\`Administrateur: ${getPermission("ADMINISTRATOR")}\nCréer une invitation: ${getPermission("CREATE_INSTANT_INVITE")}\nExpulser des membres: ${getPermission("KICK_MEMBERS")}\nBannir des membres: ${getPermission("BAN_MEMBERS")}\nGérer les salons: ${getPermission("MANAGE_CHANNELS")}\nGérer le serveur: ${getPermission("MANAGE_GUILD")}\nGérer les messages: ${getPermission("MANAGE_MESSAGES")}\nGérer les rôles: ${getPermission("MANAGE_ROLES")}\nGérer les pseudos: ${getPermission("MANAGE_NICKNAMES")}\nGérer les émojis: ${getPermission("MANAGE_EMOJIS")}\nGérer les webhooks: ${getPermission("MANAGE_WEBHOOKS")}\nMuter le micro des membres: ${getPermission("MUTE_MEMBERS")}\nMuter le casque des membres: ${getPermission("DEAFEN_MEMBERS")}\nDéplacer des membres: ${getPermission("MOVE_MEMBERS")}\`\`\``)
    message.channel.send(embed).catch(e => {
        message.channel.send("Une erreur s'est produite!")
        console.log(`Une erreur a eu lieu: ${e}!`)
    })
}

module.exports.help = {
    name: "userinfo",
    alias: "ui",
    description: "Affiche les informations d'un utilisateur.",
    usage: `userinfo <user>`,
    category: "informations",
    cooldown: 7
}