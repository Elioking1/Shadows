const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, member, muteType) => {
    let logs = member.guild.channels.cache.get(db.get(`Logs_${member.guild.id}`))
    if(logs) {
      const embed = new Discord.MessageEmbed()
        .setTitle("<:voicem:768910523651325962> Démutement d'un membre en vocal")
    .addField("Membre", member.user.tag)
    .addField("Type", muteType)
    .setThumbnail("https://icons.iconarchive.com/icons/flat-icons.com/square/256/recording-micro-icon.png")
  logs.send(embed)
    }
}