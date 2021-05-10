const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setDescription(`:love_letter:Veuillez cliquer [ici](https://discord.gg/E8UtNnj) pour rejoindre mon serveur de support!`)
    message.channel.send(embed)
}

module.exports.help = {
    name: "support",
    description: "Permet de rejoindre le serveur de support du bot.",
    usage: `support`,
    category: "informations",
    cooldown: 3
}