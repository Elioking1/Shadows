const Discord = require('discord.js');
const cooldown = new Set()
const dances = [
    "https://cdn.weeb.sh/images/HkMO_8Xvb.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699885777773002822/tenor_16.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699885778116804698/tenor_17.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699885778725240882/tenor_20.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699885779236683867/tenor_18.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699885779471564820/tenor_19.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699885779731742720/tenor_13.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699885779958366288/tenor_14.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699885780197179462/tenor_9.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699885780843102258/tenor_12.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699885781170389102/tenor_15.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699885901265895474/tenor_21.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699885901479673876/tenor_22.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/699885901773275206/tenor_23.gif",
    "https://cdn.weeb.sh/images/HJd2_8mPZ.gif",
    "https://cdn.weeb.sh/images/HJUd_LXwW.gif"
]

module.exports.run = async (bot, message, args) => {
    const dance = dances[Math.floor(Math.random() * dances.length)];

    const embed = new Discord.MessageEmbed()
    .setTitle(`💃${message.author.username} est en train de danser`)
    .setColor("RANDOM")
    .setImage(dance);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "dance",
        description: "Dance",
        usage: `dance`,
        category: "social",
        cooldown: 10
    }