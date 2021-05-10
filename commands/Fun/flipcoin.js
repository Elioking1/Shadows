const Discord = require ("discord.js");
const pofs = [
    "Pile",
    "Face"
]
 
module.exports.run = async (bot, message, args) => {
    let pof = pofs[Math.floor(Math.random() * pofs.length)];
    let embed = new Discord.MessageEmbed()
    .setTitle("Pile ou Face")
    .setDescription(`En jettant la pièce, j'ai obtenu **${pof}**`)
    .setThumbnail("https://i.pinimg.com/originals/8f/06/04/8f0604aedc34d33d2f41113c312a588d.gif")
    message.channel.send(embed)
}

module.exports.help = {
    name: "flipcoin",
    alias: "coinflip",
    alias2: "pof",
    alias3: "pileouface",
    description: "Permet de jouer à pile ou face.",
    usage: `flipcoin`,
    category: "fun",
    cooldown: 3
}