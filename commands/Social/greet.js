const Discord = require('discord.js');
const greets = [
    "https://cdn.weeb.sh/images/rkeALjnCb.gif", 
    "https://cdn.weeb.sh/images/Skc7rj3AZ.gif", 
    "https://cdn.weeb.sh/images/rJ0QSs3R-.gif", 
    "https://cdn.weeb.sh/images/rJXEBohCb.gif", 
    "https://cdn.weeb.sh/images/ry8FIs30W.gif", 
    "https://cdn.weeb.sh/images/SJKlBs3R-.gif", 
    "https://cdn.weeb.sh/images/BJ0ZSonR-.gif", 
    "https://cdn.weeb.sh/images/ry-a4s2Cb.gif", 
    "https://i.imgur.com/EpeiJq8.gifv",
    "https://i.imgur.com/fHs8bHM.gifv", 
    "https://media.tenor.com/images/824a5c6fb0eff4de202d0cd4da1e6692/tenor.gif", 
    "https://media.tenor.com/images/250fc8aacb8c89b4b3b8a0384a3df4ea/tenor.gif", 
    "https://media.tenor.com/images/251d736302c3dcdb755b9aa59174556d/tenor.gif", 
    "https://media1.tenor.com/images/b82e6a78b221f7dc2e41605b6aa2cbcc/tenor.gif?itemid=11503720", 
    "https://media1.tenor.com/images/5fe3d72c88c132fb8c7233e075569b1c/tenor.gif?itemid=11038905", 
    "https://cdn.weeb.sh/images/Bk5TNi3AW.gif", 
    "https://cdn.weeb.sh/images/HJ794ohR-.gif", 
    "https://cdn.weeb.sh/images/Sk3cVin0-.gif", 
    "https://cdn.weeb.sh/images/HyThNj20W.gif", 
    "https://cdn.weeb.sh/images/HyALNi3Cb.gif", 
    "https://cdn.weeb.sh/images/BJuhEi2Ab.gif", 
    "https://cdn.weeb.sh/images/Sk9VEsnR-.gif"
]

module.exports.run = async (bot, message, args) => {
    const greet = greets[Math.floor(Math.random() * greets.length)];
    const MentionedUser = message.mentions.users.first() ? message.mentions.users.first() : message.guild.members.cache.get(args[0]) ? message.guild.members.cache.get(args[0]).user : bot.user
    const embed = new Discord.MessageEmbed()
    .setTitle(`👋${message.author.username} salue ${MentionedUser.username}`)
    .setColor("RANDOM")
    .setImage(greet);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "greet",
        description: "Salue le bot ou le membre mentionné.",
        usage: `greet <user/ID>`,
        category: "social",
        cooldown: 10
    }