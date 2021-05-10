const Discord = require('discord.js');
const highfives = [
    "https://cdn.discordapp.com/attachments/695954676402618388/699790319352545310/tenor_15.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699790319675244635/tenor_16.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699790319918514176/tenor_14.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699790320140943411/tenor_19.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699790320707305542/tenor_20.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699790321227137064/tenor_17.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699790321571332196/tenor_18.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699790321856413716/tenor_12.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699790322162729020/tenor_13.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699790322418319390/tenor_9.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699790536449720360/tenor_21.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699790536806105118/tenor_22.gif"
]

module.exports.run = async (bot, message, args) => {
    const highfive = highfives[Math.floor(Math.random() * highfives.length)];
    const MentionedUser = message.mentions.users.first() ? message.mentions.users.first() : message.guild.members.cache.get(args[0]) ? message.guild.members.cache.get(args[0]).user : bot.user
    const embed = new Discord.MessageEmbed()
    .setTitle(`✋${message.author.username} tope la 5 avec ${MentionedUser.username}`)
    .setColor("RANDOM")
    .setImage(highfive);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "highfive",
        alias: "h5",
        description: "Tope la 5 avec le bot ou le membre mentionné.",
        usage: `highfive <user/ID>`,
        category: "social",
        cooldown: 10
    }