const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, member, role) => {
    let logs = member.guild.channels.cache.get(db.get(`Logs_${member.guild.id}`))
    if(logs) {
      const embed = new Discord.MessageEmbed()
        .setTitle("<:autorole:737605285778161674> Attribution d'un rôle")
    .addField("Nom", role.name, true)
    .addField("ID", role.id, true)
    .addField("Membre", member.user.tag, true)
    .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ATlSYZxg8j2acfxGSkoZtG9FmsqUEyB_kg&usqp=CAU")
  logs.send(embed)
    }
}