const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let argument = args.join(" ");
    if(!argument) return message.channel.send("Veuiller rentrer un texte!")
    let result = argument.toLowerCase();
    message.channel.send(`**${message.author.username}**: ${result}`)
}

module.exports.help = {
    name: "smallcaps",
    alias: "smc",
    description: "Convertis tous les lettres de votre argument en minuscules.",
    usage: `smallcaps [texte]`,
    category: "fun",
    cooldown: 3
}