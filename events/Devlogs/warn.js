const Discord = require("discord.js")
const config = require("../../config.json")

module.exports = async (bot, info) => {
    const channel = bot.channels.cache.get(config.channels.devLogs)
    const embed = new Discord.MessageEmbed()
    .setTitle("Nouveau avertissement obtenu")
    .setDescription(`Une nouveau avertissement est arrivé:\n\n\`\`\`js\n${info}\n\`\`\``)
    .setThumbnail("https://www.kindpng.com/picc/m/20-206435_yellow-error-icon-png-transparent-png.png")
    channel.send(embed)
}