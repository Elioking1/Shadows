const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, member, deafType) => {
    let logs = member.guild.channels.cache.get(db.get(`Logs_${member.guild.id}`))
    if(logs) {
      const embed = new Discord.MessageEmbed()
        .setTitle("🔇 Nouveau membre en vocal en sourdine")
    .addField("Membre", member.user.tag)
    .addField("Type", deafType)
    .setThumbnail("https://icons-for-free.com/iconfiles/png/512/deaf-1321215616941144758.png")
  logs.send(embed)
    }
}