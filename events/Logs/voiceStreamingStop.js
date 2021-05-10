const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, member, voiceChannel) => {
    let logs = member.guild.channels.cache.get(db.get(`Logs_${member.guild.id}`))
    if(logs) {
      const embed = new Discord.MessageEmbed()
        .setTitle("🔴 Fin de stream dans un salon vocal")
    .addField("Nom du vocal", voiceChannel.name, true)
    .addField("ID du vocal", voiceChannel.id, true)
    .addField("Membre", member.user.tag)
    .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScCmQfgiELxeHq4AJGBR1MIYSILAnEWZ8G0Q&usqp=CAU")
  logs.send(embed)
    }
}