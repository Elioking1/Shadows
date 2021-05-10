const Discord = require('discord.js');
const akaneko = require("akaneko")

module.exports.run = async (bot, message, args) => {

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Hentai")
.setImage(akaneko.nsfw.hentai())
message.channel.send(embed)
}

module.exports.help = {
    name: "hentai",
    description: "Affiche une image de catégorie hentai.",
    usage: `hentai`,
    category: "nsfw",
    cooldown: 10
}