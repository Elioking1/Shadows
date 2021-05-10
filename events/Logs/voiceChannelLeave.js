const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, member, voiceChannel) => {
    let logs = member.guild.channels.cache.get(db.get(`Logs_${member.guild.id}`))
    if(logs) {
      const embed = new Discord.MessageEmbed()
        .setTitle("🔌 Déconnexion à un salon vocal")
    .addField("Nom du vocal", voiceChannel.name, true)
    .addField("ID du vocal", voiceChannel.id, true)
    .addField("Membre", member.user.tag)
    .setThumbnail("https://www.freeiconspng.com/uploads/disconnect-unplug-icon-17.png")
  logs.send(embed)
    }
}