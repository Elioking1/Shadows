const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, member, role) => {
    let logs = member.guild.channels.cache.get(db.get(`Logs_${member.guild.id}`))
    if(logs) {
      const embed = new Discord.MessageEmbed()
        .setTitle("<:autorole:737605285778161674> Reprise d'un rôle")
    .addField("Nom", role.name, true)
    .addField("ID", role.id, true)
    .addField("Membre", member.user.tag, true)
    .setThumbnail("https://www.iconfinder.com/data/icons/users-16/16/person_minus-512.png")
  logs.send(embed)
    }
}