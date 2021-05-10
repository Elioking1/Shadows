const Discord = require('discord.js');
const akaneko = require("akaneko")

module.exports.run = async (bot, message, args) => {

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Maid")
.setImage(akaneko.nsfw.maid())
message.channel.send(embed)
}

module.exports.help = {
    name: "maid",
    description: "Affiche une image de catégorie maid.",
    usage: `maid`,
    category: "nsfw",
    cooldown: 10
}