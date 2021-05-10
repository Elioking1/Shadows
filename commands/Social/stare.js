const Discord = require('discord.js');
const stares = [
    "https://media.tenor.com/images/f15eb2ff5e52227d460ef9b1756a8214/tenor.gif", 
    "https://media.tenor.com/images/be831f8c1dcc59d0cefbcc28dae315cf/tenor.gif", 
    "https://media.tenor.com/images/c3f0b2ce02489b7a64d0c51ec92f02d5/tenor.gif", 
    "https://media.tenor.com/images/1fddac67c1f014378d8f35d443efe9a1/tenor.gif", 
    "https://media.tenor.com/images/3033a89d8a72223de0a6dcb91480c3b8/tenor.gif", 
    "https://media.tenor.com/images/14f541d70996f76cef95cd067f9c6eae/tenor.gif",
    "https://media.tenor.com/images/8e1806d2937e8b39eb13c6769d4c77fe/tenor.gif", 
    "https://media.tenor.com/images/ab018ad4ee6e438acf399a8171ff4b72/tenor.gif", 
    "https://media.tenor.com/images/1020051c01f3163b8d2c9a98fa21b9f6/tenor.gif", 
    "https://media.tenor.com/images/6f693463335284767d46aef5fbfeb449/tenor.gif", 
    "https://media.tenor.com/images/8000660e5ef61f49bf1d4bf501923592/tenor.gif", 
    "https://media1.tenor.com/images/763c8a202357fadf65831474263a2298/tenor.gif?itemid=17024111", 
    "https://media.tenor.com/images/7763b75ed7b73caf83257f176605c19e/tenor.gif", 
    "https://media.tenor.com/images/30a3c27225dda6e09ea14df7bc05e936/tenor.gif", 
    "https://media.tenor.com/images/b23209ec683e03171c2df5f80e6b470a/tenor.gif", 
    "https://cdn.weeb.sh/images/Bk12IJYvb.gif",
    "https://cdn.weeb.sh/images/rk0v81YwW.gif", 
    "https://cdn.weeb.sh/images/rye2dUyKwW.jpeg",
    "https://cdn.weeb.sh/images/SyA_LJYPb.png", 
    "https://cdn.weeb.sh/images/Hk22hAo9M.gif",
    "https://cdn.weeb.sh/images/SyA98yFPZ.png", 
    "https://cdn.weeb.sh/images/ryya8kFPZ.gif", 
    "https://cdn.weeb.sh/images/B1xpnU1YPZ.gif", 
    "https://cdn.weeb.sh/images/SJ9_8kFwb.gif", 
    "https://cdn.weeb.sh/images/Bk12IJYvb.gif", 
    "https://cdn.weeb.sh/images/BJxyjLyFD-.jpeg", 
    "https://cdn.weeb.sh/images/HyT3UkFwb.gif"
]

module.exports.run = async (bot, message, args) => {
    const stare = stares[Math.floor(Math.random() * stares.length)];
    const MentionedUser = message.mentions.users.first() ? message.mentions.users.first() : message.guild.members.cache.get(args[0]) ? message.guild.members.cache.get(args[0]).user : bot.user
    const embed = new Discord.MessageEmbed()
    .setTitle(`👀 ${message.author.username} lache un regard à ${MentionedUser.username}`)
    .setColor("RANDOM")
    .setImage(stare);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "stare",
        description: "Lache un regard au bot ou au membre mentionné.",
        usage: `stare <user/ID>`,
        category: "social",
        cooldown: 10
    }