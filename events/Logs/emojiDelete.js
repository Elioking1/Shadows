const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, emoji) => {
    let logs = emoji.guild.channels.cache.get(db.get(`Logs_${emoji.guild.id}`))
    if(logs) {
      const embedemojidelete = new Discord.MessageEmbed()
        .setTitle("😢 Émoji Supprimé")
    .addField("Nom", emoji.name, true)
    .addField("ID", emoji.id, true)
    .setThumbnail(emoji.url)
  logs.send(embedemojidelete)
  }
}