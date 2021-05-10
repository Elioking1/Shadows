const Discord = require('discord.js');
const akaneko = require("akaneko")

module.exports.run = async (bot, message, args) => {

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Orgy")
.setImage(akaneko.nsfw.orgy())
message.channel.send(embed)
}

module.exports.help = {
    name: "orgy",
    description: "Affiche une image de catégorie orgy.",
    usage: `orgy`,
    category: "nsfw",
    cooldown: 10
}