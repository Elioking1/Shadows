const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, member, deafType) => {
    let logs = member.guild.channels.cache.get(db.get(`Logs_${member.guild.id}`))
    if(logs) {
      const embed = new Discord.MessageEmbed()
        .setTitle("🔈 Nouveau membre en vocal qui n'est plus en sourdine")
    .addField("Membre", member.user.tag)
    .addField("Type", deafType)
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/1024px-Speaker_Icon.svg.png")
  logs.send(embed)
    }
}