const Discord = require('discord.js');
const cooldown = new Set()
const sads = [
    "https://cdn.discordapp.com/attachments/695560610640822292/701533918188273764/tenor_19.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701533918565892106/tenor_20.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701533919371067392/tenor_13.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701533919559942234/tenor_14.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701533919727845386/tenor_9.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701533920000475187/tenor_12.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701533920218447993/tenor_17.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701533920587677726/tenor_18.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701533920768032819/tenor_15.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701533920935542784/tenor_16.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701534139169505410/tenor_21.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701534139576221726/tenor_25.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701534139815297688/tenor_22.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701534140004171789/tenor_23.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701534141182902472/tenor_26.gif"
]

module.exports.run = async (bot, message, args) => {
    const sad = sads[Math.floor(Math.random() * sads.length)];

    const embed = new Discord.MessageEmbed()
    .setTitle(`🙁${message.author.username} est triste`)
    .setColor("RANDOM")
    .setImage(sad);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "sad",
        description: "Partage votre tristesse.",
        usage: `sad`,
        category: "social",
        cooldown: 7
    }