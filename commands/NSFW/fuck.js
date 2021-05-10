const Discord = require('discord.js');
const fucks = [
    "https://78.media.tumblr.com/0cba71c55002cf8b25a738e6f4bdad5b/tumblr_nofw3dX5rj1uvbosmo1_500.gif",
    "https://78.media.tumblr.com/a88e2331cfb1e1e290e1cb1b3b4c7ebd/tumblr_orv5n86VsE1tawcdjo1_540.gif",
    "https://giant.gfycat.com/MelodicImpoliteDolphin.gif",
    "https://78.media.tumblr.com/tumblr_lp0y4rMyGq1ql4hl8o1_400.gif",
    "https://78.media.tumblr.com/074d99e0269aa91fd5241e8c226e5823/tumblr_o02fm5LKzq1u2s3z9o1_500.gif"
]
module.exports.run = async (bot, message, args) => {
    const fuck = fucks[Math.floor(Math.random() * fucks.length)];
    const MentionedUser = message.mentions.users.first() || bot.user
    const embed = new Discord.MessageEmbed()
    .setTitle(`👉👌${message.author.username} fait l'amour avec ${MentionedUser.username}`)
    .setColor("RANDOM")
    .setImage(fuck);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "fuck",
        description: "Fait l'amour avec le bot ou le membre mentionné.",
        usage: `fuck <user>`,
        category: "nsfw",
        cooldown: 10
    }