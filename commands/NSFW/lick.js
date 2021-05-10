const Discord = require('discord.js');
const licks = [
    "https://78.media.tumblr.com/2ab898a31763efa59f79f9f70ae6f73f/tumblr_ojl1dt96jM1vlyxl7o1_500.gif",
    "https://78.media.tumblr.com/b28ec534daadf847ab0e6c7d9727df64/tumblr_my8j9dSom21qatn9jo1_500.gif",
    "http://imgur.com/YBLo6Kj.gif",
    "https://cdn.discordapp.com/attachments/668981160206139424/682229768631877683/images_4.jpeg",
    "https://cdn.discordapp.com/attachments/668981160206139424/682230106092994561/images_4.jpeg",
    "https://78.media.tumblr.com/b4234504943d22a38dbca934c4a7b484/tumblr_mrhj4u0nxJ1sp36hvo1_500.gif",
    "https://78.media.tumblr.com/901aa3b24094fda221d876284e106c18/tumblr_nvmkunzvs11u9nb62o1_500.gif",
    "http://imgur.com/Kqyp8PY.gif",
    "http://imgur.com/2hVVx6m.gif",
    "https://78.media.tumblr.com/458ac5a660af1cdd0539e2eaae8dfd9c/tumblr_oqh2nquPbK1ua0x8go1_500.gif",
    "http://imgur.com/y24dRUA.gif",
    "https://78.media.tumblr.com/33e2c155fefbb85f7e1555261338aeca/tumblr_o8clg3gW9T1v4c9f4o1_400.gif",
    "https://78.media.tumblr.com/76ff15334bc59fc185658082398324ca/tumblr_oqxuo1g5Ed1vottrko1_500.gif",
    "https://78.media.tumblr.com/c1e12becb7e1c250ff08822eb713ff9a/tumblr_nzufvpecwa1umggj7o1_500.gif",
    "https://78.media.tumblr.com/17810adb20d65b93e2dbdb09905857c1/tumblr_p04d0oXMHx1tta3uto1_500.gif"
]

module.exports.run = async (bot, message, args) => {
    const lick = licks[Math.floor(Math.random() * licks.length)];
    const MentionedUser = message.mentions.users.first() || bot.user
    const embed = new Discord.MessageEmbed()
    .setTitle(`👅${message.author.username} lèche ${MentionedUser.username}`)
    .setColor("RANDOM")
    .setImage(lick);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "lick",
        description: "Lèche le bot ou le membre mentionné.",
        usage: `lick <user>`,
        category: "nsfw",
        cooldown: 10
    }