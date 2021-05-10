const Discord = require("discord.js")
const config = require("../../config.json")

module.exports = async(bot, guild) => {
    let logs = bot.channels.cache.get(config.channels.servers)
    if(logs) {
    const embed = new Discord.MessageEmbed()
    .setTitle("📤 Retrait du bot d'un serveur")
    .setColor("RED")
    .setThumbnail(guild.iconURL({dynamic: true}))
    .addField(`\u200B`, `\`\`\`Nom: ${guild.name}\nID: ${guild.id}\nPropriétaire: ${guild.owner.user.tag}\nID du propriétaire: ${guild.ownerID}\nNombre de membres: ${guild.memberCount}\`\`\``)
    logs.send(embed)
    }
}