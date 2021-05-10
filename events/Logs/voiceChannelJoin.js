const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, member, voiceChannel) => {
    let logs = member.guild.channels.cache.get(db.get(`Logs_${member.guild.id}`))
    if(logs) {
      const embed = new Discord.MessageEmbed()
        .setTitle("🎙️ Connexion à un salon vocal")
    .addField("Nom du vocal", voiceChannel.name, true)
    .addField("ID du vocal", voiceChannel.id, true)
    .addField("Débit Binaire", voiceChannel.bitrate)
    .addField("Membre", member.user.tag)
    .setThumbnail("https://icons.iconarchive.com/icons/flat-icons.com/square/256/recording-micro-icon.png")
  logs.send(embed)
    }
}