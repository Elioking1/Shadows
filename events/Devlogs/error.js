const Discord = require("discord.js")
const config = require("../../config.json")

module.exports = async (bot, error) => {
    const channel = bot.channels.cache.get(config.channels.devLogs)
    const embed = new Discord.MessageEmbed()
    .setTitle("Nouvelle erreur obtenu")
    .setDescription(`Une nouvelle erreur s'est produite:\n\n\`\`\`js\n${error}\n\`\`\``)
    .setThumbnail("https://www.pngitem.com/pimgs/m/119-1190874_warning-icon-png-png-download-icon-transparent-png.png")
    channel.send(embed)
}