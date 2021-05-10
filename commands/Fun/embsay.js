const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
     
 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission d'utiliser cette commande!");
    let botmessage = args.join(" ");
    if(!botmessage) return message.channel.send("Veuillez rédiger un message à faire répéter au bot!");
    message.delete().catch();
    const embed = new Discord.MessageEmbed()
    .setDescription(botmessage)
    .setColor("#00dcff")
    message.channel.send(embed)
 
}
 
module.exports.help = {
    name: "embedsay",
    alias: "embsay",
    description: "Fait parler le bot sous forme d'un embed.",
    usage: `embedsay [texte]`,
    category: "fun",
    cooldown: 5
}