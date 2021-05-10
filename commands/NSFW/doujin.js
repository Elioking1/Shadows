const Discord = require('discord.js');
const akaneko = require("akaneko")

module.exports.run = async (bot, message, args) => {

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Doujin")
.setImage(akaneko.nsfw.doujin())
message.channel.send(embed)
}

module.exports.help = {
    name: "doujin",
    description: "Affiche une image de catégorie doujin.",
    usage: `doujin`,
    category: "nsfw",
    cooldown: 10
}