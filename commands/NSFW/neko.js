const Discord = require('discord.js');
const akaneko = require("akaneko")

module.exports.run = async (bot, message, args) => {

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Neko")
.setImage(akaneko.lewdneko())
message.channel.send(embed)
}

module.exports.help = {
    name: "neko",
    description: "Affiche une image de catégorie neko.",
    usage: `neko`,
    category: "nsfw",
    cooldown: 10
}