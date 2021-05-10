const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
     
 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission d'utiliser cette commande!");
    let botmessage = args.join(" ");
    if(!botmessage) return message.channel.send("Veuillez rédiger un message à faire répéter au bot!");
    message.delete().catch();
    message.channel.send(botmessage)
 
}
 
module.exports.help = {
    name: "say",
    description: "Fait parler le bot.",
    usage: `say [texte]`,
    example: "say Coucou",
    category: "fun",
    cooldown: 3
}