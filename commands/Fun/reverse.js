const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let argument = args.join(" ");
    if(!argument) return message.channel.send("Veuillez rédiger un texte!")
    message.channel.send(`**${message.author.username}**: ${argument.split('').reverse().join('')}`, { disableMentions: "all" });
}

module.exports.help = {
    name: "reverse",
    alias: "rv",
    description: "Renverse votre texte.",
    usage: `reverse [texte]`,
    category: "fun",
    cooldown: 5
}