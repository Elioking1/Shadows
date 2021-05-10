const Discord = require('discord.js');
const cooldown = new Set();
const smiles = [
    "https://media1.tenor.com/images/c5fad21f9828d19044a58f8b84a6e14b/tenor.gif?itemid=6013419",
    "https://giphy.com/gifs/animation-rFfmUWVMOyKVG",
    "https://media1.tenor.com/images/712a8845dbea5f4b6a7824beeecbe79f/tenor.gif?itemid=15941742",
    "https://giphy.com/gifs/smile-katachi-koe-ellxlkgbPTiM0",
    "https://media.tenor.com/images/65affef767eec1db4f67f8c71d33141c/tenor.gif",
    "https://thumbs.gfycat.com/OblongAdoredGoshawk-size_restricted.gif",
    "https://thumbs.gfycat.com/SplendidBeautifulFieldspaniel-size_restricted.gif",
    "https://cdn72.picsart.com/186168594000202.gif?to=min&r=640",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5SE6cdA87srR1-TY6skR6w2xEJB09AU0XtpeGk4VGg4SReONq&usqp=CAU",
    "https://data.whicdn.com/images/253526599/original.gif",
    "https://i.gifer.com/14pU.gif",
    "https://cdn.lowgif.com/full/07924591983847ac-shinryaku-ika-musume-anime-smile-gif-on-gifer-by-agamazar.gif",
    "https://46.media.tumblr.com/762dbab12f7e24ed67e883ea9e5c8f16/tumblr_oyxt4rekcj1tydz8to1_540.gif",
    "https://thumbs.gfycat.com/InsistentUnnaturalEmu-size_restricted.gif",
    "https://66.media.tumblr.com/af384375cae363351ef3cc2b27703997/tumblr_mh5y8m2R0Q1rcj8eco1_500.gif",
    "https://media.tenor.com/images/f4273baaa0b2493f1c4b2d4ed32aaa9c/tenor.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROUrSOLC2-tzkigLrjuVx4OUN3Oy_p_CXM4OCKFNLD5rzRali-&usqp=CAU",
    "https://ci.memecdn.com/4516972.gif",
    "https://giphy.com/gifs/smile-luffy-ZpfRVpfuh9YQM",
    "https://cutewallpaper.org/21/smiling-anime-boy/Anime-Boy-Smile-GIFs-Tenor.gif",
    "https://i.pinimg.com/originals/63/ca/58/63ca58fb23c0901176abf1787fa3bfce.gif",
    "https://46.media.tumblr.com/4107c390b3cb3b8a215bcd4c5f1b1dc3/tumblr_o3x6o2REG91tydz8to1_540.gif",
    "https://cdn.lowgif.com/medium/a6bdec2753cb5410-blood-blockade-battlefront-smile-gif-find-share-on-giphy.gif",
    "https://gifimage.net/wp-content/uploads/2018/05/smile-anime-gif-9.gif",
    "https://cdn.weeb.sh/images/Hk6cNJKPb.gif"
]

module.exports.run = async (bot, message, args) => {
    const smile = smiles[Math.floor(Math.random() * smiles.length)];

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`:smile: **${message.author.username}** sourit`)
.setImage(smile);
message.channel.send(embed)
}

module.exports.help = {
    name: "smile",
    description: "Sourit.",
    usage: `smile`,
    category: "social",
    coooldown: 10
}