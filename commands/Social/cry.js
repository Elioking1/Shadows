const Discord = require('discord.js');
const Zoro = require("zoro-api")

module.exports.run = async (bot, message, args) => {
    let img = await Zoro.cry()
    const embed = new Discord.MessageEmbed()
    .setTitle(`:cry: **${message.author.username}** pleure`)
    .setColor("RANDOM")
    .setImage(img);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "cry",
        description: "PLeure",
        usage: `cry`,
        category: "social",
        cooldown: 10
    }