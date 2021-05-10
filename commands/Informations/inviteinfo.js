const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send("Veuillez mettre le code d'un lien d'invitation du serveur!")
    let codeinvite;
    await message.guild.fetchInvites().then(invites => codeinvite = invites.find(invite => invite.code == args[0]))
    if(!codeinvite) return message.channel.send("Code d'invitation invalide! Mettez un code valide!")

    const embed = new Discord.MessageEmbed()
    .setTitle(`Informations sur le code d'invitation **${codeinvite.code}**`)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .addField(`\u200B`, `\`\`\`Code: ${codeinvite.code}\nSalon: ${codeinvite.channel.name}\nCréation: ${moment(codeinvite.createdAt).format("DD/MM/YYYY | hh:mm:ss")}\nInviteur: ${codeinvite.inviter.tag}\nID de l'inviteur: ${codeinvite.inviter.id}\`\`\``)

    message.channel.send(embed).catch(e => {
        message.channel.send("Une erreur s'est produite!")
        console.log(`Une erreur a eu lieu: ${e}!`)
    })
}

module.exports.help = {
    name: "inviteinfo",
    alias: "ii",
    description: "Affiche les informations d'une invitation.",
    usage: `inviteinfo [code d'une invitation]`,
    category: "informations",
    cooldown: 7
}