const Discord = require ("discord.js")
const config = require("../../config.json")
 
module.exports.run = async (bot, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setDescription(`🗳️Veuillez voter pour moi sur:`)
    .addField(`\u200B`, config.votes.map((r,i) => `${i+1}) ${r.emoji} [${r.name}](${r.link})`).join(`\n`), true)
    message.channel.send(embed)
}

module.exports.help = {
    name: "vote",
    description: "Vote le bot.",
    usage: `vote`,
    category: "informations",
    cooldown: 5
}