const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {
    message.channel.send(`**${message.author.username}**, il y a **${message.guild.memberCount}** membres dans le serveur **${message.guild.name}** !`)
}

module.exports.help = {
    name: "membercount",
    alias: "mc",
    description: "Affiche le nombre de membres dans le serveur actuel.",
    usage: `membercount`,
    category: "informations",
    cooldown: 3
}