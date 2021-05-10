const Discord = require("discord.js")
const db = require("quick.db")
const moment = require("moment")

module.exports = async (bot, invite) => {
    let logs = invite.guild.channels.cache.get(db.get(`Logs_${invite.guild.id}`))
    if(logs) {
    const embedinvitecreate = new Discord.MessageEmbed()
    .setTitle(":link: Expiration/Suppression d'un lien d'invitation")
    .addField("Créateur", invite.inviter.username, true)
    .addField("ID du créateur", invite.inviter.id, true)
    .addField("Code du lien",invite.code, true)
    .addField("Salon", invite.guild.channels.cache.get(invite.channel.id).name, true)
    .addField("Création", moment(invite.createdAt).format("DD/MM/YYYY | hh:mm:ss"), true)
    .addField("Nombre maximal d'utilisation", invite.maxUses, true)
    .addField("Lien", invite.url, true)
    .setThumbnail("https://www.shareicon.net/data/512x512/2015/11/02/666004_plus_512x512.png")
    logs.send(embedinvitecreate)
  }
}