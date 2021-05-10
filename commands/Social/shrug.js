const Discord = require('discord.js');
const shrugs = [
    "https://cdn.discordapp.com/attachments/695560610640822292/701687499965071400/tenor_13.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701687500300746803/tenor_14.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701687500711788624/tenor_9.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701687500950732810/tenor_12.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701687501164642344/tenor_17.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701687501517226025/tenor_18.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701687501894451220/tenor_15.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701687502213349406/tenor_16.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701687502372732949/tenor_19.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701687502574190612/tenor_20.gif",
    "https://cdn.weeb.sh/images/HkpQ7JYDW.gif",
    "https://cdn.weeb.sh/images/HyHk2WSrz.gif",
    "https://cdn.weeb.sh/images/r1xdmmkKP-.jpeg",
    "https://cdn.weeb.sh/images/HyuXX1FPZ.png"
]

module.exports.run = async (bot, message, args) => {
    const shrug = shrugs[Math.floor(Math.random() * shrugs.length)];

    const embed = new Discord.MessageEmbed()
    .setTitle(`🤷${message.author.username} hausse les épaules`)
    .setColor("RANDOM")
    .setImage(shrug);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "shrug",
        description: "Hausse les épaules.",
        usage: `shrug`,
        category: "social",
        cooldown: 10
    }