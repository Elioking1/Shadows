const Discord = require ("discord.js");
const config = require("../../config.json")
 
module.exports.run = async (bot, message, args) => {
    const owner = bot.users.cache.get("695313341404414001")
    message.channel.send(`**${message.author.username}**, Mon créateur est **${owner.tag}** !`)
}

module.exports.help = {
    name: "owner",
    description: "Affiche l'owner du bot.",
    usage: `owner`,
    category: "informations",
    cooldown: 3
}