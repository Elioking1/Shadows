const Discord = require('discord.js');
const nudess = [
    "https://cdn.boob.bot/boobs/8000FD15.gif",
    "https://cdn.boob.bot/boobs/8000367D.gif",
    "https://cdn.boob.bot/boobs/80002E9E.gif",
    "https://cdn.boob.bot/boobs/8000883A.gif",
    "https://cdn.boob.bot/boobs/4C65.jpg",
    "https://cdn.boob.bot/boobs/8001591D.gif",
    "https://cdn.boob.bot/boobs/8000ED57.gif",
    "https://cdn.boob.bot/boobs/4CFE.gif",
    "https://cdn.boob.bot/boobs/80009AFF.gif",
    "https://cdn.boob.bot/boobs/8000ABF3.gif",
    "https://cdn.boob.bot/boobs/800139A1.gif",
    "https://cdn.boob.bot/boobs/8000CDDB.gif",
    "https://cdn.boob.bot/boobs/80013B72.jpg",
    "https://cdn.boob.bot/boobs/80002282.gif",
    "https://cdn.boob.bot/boobs/80011B5B.jpg",
    "https://cdn.boob.bot/boobs/800023B8.gif",
    "https://cdn.boob.bot/boobs/8001649E.jpg",
    "https://cdn.boob.bot/boobs/800009AF.gif",
    "https://cdn.boob.bot/boobs/80013DDE.gif",
    "https://cdn.boob.bot/boobs/800076AB.gif",
    "https://cdn.boob.bot/boobs/80015A53.jpg",
    "https://cdn.boob.bot/boobs/8000463B.gif",
    "https://cdn.boob.bot/boobs/8000463B.gif",
    "https://cdn.boob.bot/boobs/8000599B.gif",
    "https://cdn.boob.bot/boobs/800103BE.gif",
    "https://cdn.boob.bot/boobs/80003411.gif",
    "https://cdn.boob.bot/boobs/8000958C.gif",
    "https://cdn.boob.bot/boobs/80011AC0.jpg",
    "https://cdn.boob.bot/boobs/8000BC4C.gif",
    "https://cdn.boob.bot/boobs/8000310A.gif",
    "https://cdn.boob.bot/boobs/8000DD99.gif",
    "https://cdn.boob.bot/boobs/80005694.gif",
    "https://cdn.boob.bot/boobs/8001386B.jpg",
    "https://cdn.boob.bot/boobs/80012777.png",
    "https://cdn.boob.bot/boobs/80007F25.gif",
    "https://cdn.boob.bot/boobs/8000B201.gif",
    "https://cdn.boob.bot/Gifs/167A.gif",
    "https://cdn.boob.bot/boobs/80005121.gif",
    "https://cdn.boob.bot/boobs/8000A7B6.gif",
    "https://cdn.boob.bot/boobs/80016197.jpg",
    "https://cdn.boob.bot/boobs/80005FA9.gif",
    "https://cdn.boob.bot/boobs/80004E1A.gif",
    "https://cdn.boob.bot/boobs/80010B02.gif"
]

module.exports.run = async (bot, message, args) => {
    const nudes = nudess[Math.floor(Math.random() * nudess.length)];

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Nudes")
.setImage(nudes);
message.channel.send(embed)
}

module.exports.help = {
    name: "nudes",
    description: "Affiche une image de catégorie nudes.",
    usage: `nudes`,
    category: "nsfw",
    cooldown: 10
}