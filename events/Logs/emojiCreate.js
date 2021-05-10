const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async(bot, emoji) => {
    let logs = emoji.guild.channels.cache.get(db.get(`Logs_${emoji.guild.id}`))
    if(logs) {
    const embedemojicreate = new Discord.MessageEmbed()
    .setTitle("🤩 Émoji rajouté")
    .addField("Nom du créateur", (await emoji.fetchAuthor()).tag, true)
    .addField("ID du créateur", (await emoji.fetchAuthor()).id, true)
    .addField(`\u200B`, `\u200B`, true)
    .addField("Nom", emoji.name, true)
    .addField("ID", emoji.id, true)
    .setThumbnail(emoji.url)
    logs.send(embedemojicreate)
    }
}