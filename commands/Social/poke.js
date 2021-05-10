const Discord = require('discord.js');
const pokes = [
    "https://cdn.weeb.sh/images/B1oSgytwW.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701572170186227722/tenor_16.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701572170702389249/tenor_17.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701572170974756925/tenor_14.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701572171214094336/tenor_15.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701572171541119098/tenor_20.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701572171717279834/tenor_18.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701572172057149490/tenor_19.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701572172442894416/tenor_12.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701572172757598248/tenor_13.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701572172925108354/tenor_9.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701572351237685368/tenor_21.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701572351447531540/tenor_22.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701572351791464448/tenor_23.gif",
    "https://cdn.discordapp.com/attachments/695560610640822292/701572352445775952/tenor_24.gif"
]

module.exports.run = async (bot, message, args) => {
    const poke = pokes[Math.floor(Math.random() * pokes.length)];
    const MentionedUser = message.mentions.users.first() ? message.mentions.users.first() : message.guild.members.cache.get(args[0]) ? message.guild.members.cache.get(args[0]).user : bot.user
    const embed = new Discord.MessageEmbed()
    .setTitle(`👉${message.author.username} donne un petit coup à ${MentionedUser.username}`)
    .setColor("RANDOM")
    .setImage(poke);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "poke",
        description: "Donne un petit coup au bot ou au membre mentionné.",
        usage: `poke <user/ID>`,
        category: "social",
        cooldown: 10
    }