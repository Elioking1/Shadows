const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, guild, oldRegion, newRegion) => {
    let logs = guild.channels.cache.get(db.get(`Logs_${guild.id}`))
    if(logs) {
      const embed = new Discord.MessageEmbed()
        .setTitle("🌐 Changement de région")
    .addField("Ancienne Région", oldRegion, true)
    .addField("Nouvelle Région", newRegion, true)
    .setThumbnail("https://cdn.iconscout.com/icon/free/png-256/globe-1855800-1573966.png")
  logs.send(embed)
    }
}