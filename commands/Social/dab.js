const Discord = require('discord.js');
const dabs = [
    "https://media.tenor.com/images/dece1e14366abd797a6f3183f77fc82e/tenor.gif",
    "https://cdn.weeb.sh/images/HyZZ2xJ5b.gif",
    "https://i.kym-cdn.com/photos/images/original/001/374/499/ab6.gif",
    "https://i.ytimg.com/vi/swUtiOlKhGs/mqdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGyzrTQrI9fn6dDYPxfyiubxes_BzFOm9cIA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvPba93ewI5BBFY86fNmc3QNzUvTodEjwoUQ&usqp=CAU",
    "https://cdn.weeb.sh/images/SkUP3ly5Z.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRveIT2kz-OZd8qvHlVdJWIkxqrvbmzAvS7dQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmBU-Fe_qJLzq5q-voDmJwpcb2a10qjeN55w&usqp=CAU"
]

module.exports.run = async (bot, message, args) => {
    const dab = dabs[Math.floor(Math.random() * dabs.length)];

    const embed = new Discord.MessageEmbed()
    .setTitle(`🤙${message.author.username} fait le dab`)
    .setColor("RANDOM")
    .setImage(dab);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "dab",
        description: "Fait le dab.",
        usage: `dab <user>`,
        category: "social",
        cooldown: 10
    }