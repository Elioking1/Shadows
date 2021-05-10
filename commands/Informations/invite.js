const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setDescription(`💖 Veuillez cliquer [ici](https://discord.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=-1) pour m'inviter sur votre serveur!`)
    message.channel.send(embed)
}

module.exports.help = {
    name: "invite",
    description: "Permet d'inviter le bot.",
    usage: `invite`,
    category: "informations",
    cooldown: 3
}