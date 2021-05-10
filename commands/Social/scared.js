const Discord = require('discord.js');
const cooldown = new Set()
const scareds = [
    "https://cdn.discordapp.com/attachments/699903755612717125/699904034445983774/tenor_17.gif",
    "https://cdn.discordapp.com/attachments/699903755612717125/699904034739453962/tenor_18.gif",
    "https://cdn.discordapp.com/attachments/699903755612717125/699904035452485662/tenor_16.gif",
    "https://cdn.discordapp.com/attachments/699903755612717125/699904035725246504/tenor_9.gif",
    "https://cdn.discordapp.com/attachments/699903755612717125/699904036014522368/tenor_19.gif",
    "https://cdn.discordapp.com/attachments/699903755612717125/699904036262117376/tenor_20.gif",
    "https://cdn.discordapp.com/attachments/699903755612717125/699904036534484992/tenor_12.gif",
    "https://cdn.discordapp.com/attachments/699903755612717125/699904036941463622/tenor_13.gif",
    "https://cdn.discordapp.com/attachments/699903755612717125/699904037537185832/tenor_14.gif",
    "https://cdn.discordapp.com/attachments/699903755612717125/699904231552843836/tenor_21.gif",
    "https://cdn.discordapp.com/attachments/699903755612717125/699904231758495824/tenor_22.gif"
]

module.exports.run = async (bot, message, args) => {
    const scared = scareds[Math.floor(Math.random() * scareds.length)];

    const embed = new Discord.MessageEmbed()
    .setTitle(`😱${message.author.username} a peur`)
    .setColor("RANDOM")
    .setImage(scared);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "scared",
        description: "Partage votre peur.",
        usage: `scared`,
        category: "social",
        cooldown: 7
    }