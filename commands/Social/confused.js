const Discord = require('discord.js');
const cooldown = new Set()
const confuseds = [
    "https://cdn.discordapp.com/attachments/687923433568468993/689215168743473222/tenor_34.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215169062109349/tenor_33.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215169498579007/tenor_32.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215169934655567/tenor_30.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215170588835947/tenor_29.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215171226501217/tenor_28.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215171603988483/tenor_27.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215172249780249/tenor_26.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215172702896130/tenor_25.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215173323653328/tenor_24.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215467281449131/tenor_17.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215467830771819/tenor_16.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215468170772518/tenor_15.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215468476825601/tenor_20.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215468791529574/tenor_19.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215469076742223/tenor_18.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215469344915459/tenor_23.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215469642842149/tenor_22.gif",
    "https://cdn.discordapp.com/attachments/687923433568468993/689215469890437126/tenor_21.gif"
]

module.exports.run = async (bot, message, args) => {
    const confused = confuseds[Math.floor(Math.random() * confuseds.length)];

    const embed = new Discord.MessageEmbed()
    .setTitle(`❓${message.author.username} est confus`)
    .setColor("RANDOM")
    .setImage(confused);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "confused",
        description: "Partage votre confusion.",
        usage: `confused`,
        category: "social",
        cooldown: 10
    }