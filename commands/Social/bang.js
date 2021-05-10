const Discord = require('discord.js');
const Zoro = require("zoro-api")

module.exports.run = async (bot, message, args) => {
    let img = await Zoro.bang()
    const MentionedUser = message.mentions.users.first() ? message.mentions.users.first() : message.guild.members.cache.get(args[0]) ? message.guild.members.cache.get(args[0]).user : bot.user
    const embed = new Discord.MessageEmbed()
    .setTitle(`☠️${message.author.username} tire sur ${MentionedUser.username}🔫`)
    .setColor("RANDOM")
    .setImage(img);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "bang",
        description: "Tire sur le bot ou le membre mentionné.",
        usage: `bang <user/ID>`,
        category: "social",
        cooldown: 10
    }