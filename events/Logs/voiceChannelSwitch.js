const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, member, oldVoiceChannel, newVoiceChannel) => {
    let logs = member.guild.channels.cache.get(db.get(`Logs_${member.guild.id}`))
    if(logs) {
      const embed = new Discord.MessageEmbed()
        .setTitle("♻️ Changement de salon vocal")
    .addField("Nom de l'ancien vocal", oldVoiceChannel.name, true)
    .addField("ID de l'ancien vocal", oldVoiceChannel.id, true)
    .addField(`\u200B`, `\u200B`)
    .addField("Nom du nouveau vocal", newVoiceChannel.name, true)
    .addField("ID du nouveau vocal", newVoiceChannel.id, true)
    .addField("Membre", member.user.tag)
    .setThumbnail("https://cdn.iconscout.com/icon/free/png-512/switch-1470433-1244947.png")
  logs.send(embed)
    }
}