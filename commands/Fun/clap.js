const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let argument = args.join(" ");
    if(!argument) return message.channel.send("Veuillez mettre un texte à faire applaudir!")
    message.channel.send(`**${message.author.username}: :clap:${argument}:clap:**`)
}

module.exports.help = {
    name: "clap",
    description: "Fait applaudir votre texte.",
    usage: `clap [texte]`,
    example: "clap Shadows",
    category: "fun",
    cooldown: 3
}