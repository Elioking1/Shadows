const Discord = require('discord.js');
const punchs = [
    "https://cdn.weeb.sh/images/HJqSvaZ-f.gif",
    "https://cdn.weeb.sh/images/B1-ND6WWM.gif",
    "https://cdn.weeb.sh/images/BJXxD6b-G.gif",
    "https://cdn.weeb.sh/images/HykeDaZWf.gif",
    "https://cdn.discordapp.com/attachments/666230115209838592/681567356442771459/giphy_1.gif",
    "https://cdn.discordapp.com/attachments/670404508073066504/686537090359492618/giphy.gif",
    "https://cdn.discordapp.com/attachments/670404508073066504/686537091412131883/giphy-1.gif",
    "https://cdn.discordapp.com/attachments/670404508073066504/686537092104192030/GrandAlertCaimanlizard-max-1mb.gif",
    "https://cdn.discordapp.com/attachments/670404508073066504/686537092544987156/tenor.gif",
    "https://cdn.discordapp.com/attachments/670404508073066504/686537093156962329/BhvWwuS.gif",
    "https://cdn.discordapp.com/attachments/680121259652153583/686849891212722181/inconnu.gif",
    "https://cdn.weeb.sh/images/HkFlwpZZf.gif"
]

module.exports.run = async (bot, message, args) => {
    const punch = punchs[Math.floor(Math.random() * punchs.length)];
    const MentionedUser = message.mentions.users.first() ? message.mentions.users.first() : message.guild.members.cache.get(args[0]) ? message.guild.members.cache.get(args[0]).user : bot.user
    const embed = new Discord.MessageEmbed()
    .setTitle(`👊${message.author.username} donne un coup de poing à ${MentionedUser.username}`)
    .setColor("RANDOM")
    .setImage(punch);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "punch",
        description: "Donne un coup de poing au bot ou au membre mentionné.",
        usage: `punch <user/ID>`,
        category: "social",
        cooldown: 10
    }