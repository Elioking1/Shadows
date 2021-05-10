const Discord = require('discord.js');
const Zoro = require("zoro-api")

module.exports.run = async (bot, message, args) => {
    let img = await Zoro.hug()
    const MentionedUser = message.mentions.users.first() ? message.mentions.users.first() : message.guild.members.cache.get(args[0]) ? message.guild.members.cache.get(args[0]).user : bot.user
    const embed = new Discord.MessageEmbed()
    .setTitle(`:hugging: **${message.author.username}** fait un câlin à **${MentionedUser.username}**`)
    .setColor("RANDOM")
    .setImage(img);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "hug",
        description: "Fait un câlin au bot ou au membre mentionné.",
        usage: `hug <user/ID>`,
        category: "social",
        cooldown: 10
    }