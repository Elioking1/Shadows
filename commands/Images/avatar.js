const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let mentionedUser = message.mentions.users.first() ? message.mentions.users.first() : message.guild.members.cache.get(args[0]) ? message.guild.members.cache.get(args[0]).user : message.author
 
    const avatarembed = new Discord.MessageEmbed()
 
        .setImage(mentionedUser.displayAvatarURL({dynamic: true}))
        .setColor("RANDOM")
        .setTitle(`Avatar de ${mentionedUser.username}`);
 
    message.channel.send(avatarembed)
}
 
module.exports.help = {
    name: "avatar",
    alias: "pdp",
    alias2: "pp",
    alias3: "pfp",
    description: "Fait apparaître votre avatar ou celui de la personne mentionnée.",
    usage: `avatar <user>`,
    category: "images",
    cooldown: 5
}