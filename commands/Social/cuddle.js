const Discord = require('discord.js');
const cuddles = [
    "https://cdn.discordapp.com/attachments/695327593758589039/699774811978596452/tenor_19.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699774812662399036/tenor_20.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699774813241081953/tenor_13.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699774813748723733/tenor_14.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699774814021484594/tenor_9.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699774814293852220/tenor_12.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699774814507892800/tenor_17.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699774814893899826/tenor_18.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699774815296552990/tenor_15.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699774816059654154/tenor_16.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699774977905262642/tenor_21.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699774978568093746/tenor_24.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699774978903638027/tenor_22.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699774979549429860/tenor_23.gif"
]

module.exports.run = async (bot, message, args) => {
    const cuddle = cuddles[Math.floor(Math.random() * cuddles.length)];
    const MentionedUser = message.mentions.users.first() ? message.mentions.users.first() : message.guild.members.cache.get(args[0]) ? message.guild.members.cache.get(args[0]).user : bot.user
    const embed = new Discord.MessageEmbed()
    .setTitle(`🤗${message.author.username} réconforte ${MentionedUser.username}`)
    .setColor("RANDOM")
    .setImage(cuddle);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "cuddle",
        description: "Réconforte le bot ou le membre mentionné.",
        usage: `cuddle <user/ID>`,
        category: "social",
        cooldown: 10
    }