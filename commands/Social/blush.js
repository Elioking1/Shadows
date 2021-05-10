const Discord = require('discord.js');
const blushs = [
    "https://media.tenor.com/images/75936b8b93269bd293bd184eb209e358/tenor.gif",
    "https://media.tenor.com/images/b4be3af320d6bff5196e627f9964c38d/tenor.gif", 
    "https://media.tenor.com/images/5f737df63beee63857ce767a877547ff/tenor.gif", 
    "https://media.tenor.com/images/4b0f5742525e44fad07d39590f61fcff/tenor.gif", 
    "https://media.tenor.com/images/ca6ac03aadb714795fb4bb9b702aa42d/tenor.gif",
    "https://media.tenor.com/images/a426e322fc671776f40b148b7aed757a/tenor.gif",
    "https://media.tenor.com/images/dd12cee4f42fa1d949182f72cb9e77f4/tenor.gif", 
    "https://media.tenor.com/images/502d721f4db727dbe222a6e57c3c4c2a/tenor.gif", 
    "https://media.tenor.com/images/bd01716fd6a850d98713fe08c5d2e467/tenor.gif", 
    "https://media.tenor.com/images/f45f5c5fd72dd7c9ff50976e2bc7133c/tenor.gif", 
    "https://media.tenor.com/images/5976e5670acb4ff9ff2407d72a272f2c/tenor.gif", 
    "https://cdn.weeb.sh/images/S1X7GIXw-.gif",
    "https://cdn.weeb.sh/images/SJ8lf8Xwb.gif"
]

module.exports.run = async (bot, message, args) => {
    const blush = blushs[Math.floor(Math.random() * blushs.length)];

    const embed = new Discord.MessageEmbed()
    .setTitle(`😊 ${message.author.username} rougit`)
    .setColor("RANDOM")
    .setImage(blush);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "blush",
        description: "Rougit",
        usage: `blush`,
        category: "social",
        cooldown: 10
    }