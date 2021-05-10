const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
    let MentionedChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel
    let type = "";
    if(MentionedChannel.type === "text") type = "💬 Salon Textuel";
    else if(MentionedChannel.type === "voice") type = "🔊 Salon Vocal";
    else if(MentionedChannel.type === "category") type = "🀄 Catégorie";
    else if(MentionedChannel.type === "news") type = "ℹ Salon News"

    let encours
    if(type == "💬 Salon Textuel") encours = `\nNSFW: ${MentionedChannel.nsfw ? "✅" : "❌"}\nContenu du dernier message: ${MentionedChannel.lastMessage ? MentionedChannel.lastMessage.content.length > 30 ? "Le message est très long!" : MentionedChannel.lastMessage.content : "❌"}\nID du dernier message: ${MentionedChannel.lastMessage ? MentionedChannel.lastMessage.id : "❌"}\nNom d'utilisateur de l'auteur du dernier message: ${MentionedChannel.lastMessage ? MentionedChannel.lastMessage.author.username : "❌"}\nID de l'auteur du denier message: ${MentionedChannel.lastMessage ? MentionedChannel.lastMessage.author.id : "❌"}\nDes membres écrivent: ${MentionedChannel.typing ? "✅" : "❌"}`
    else encours = ""
    const embed = new Discord.MessageEmbed()
    .addField("👑 <:doublefleche:773257544570765312> Nom + ID", `\`\`\`Nom: ${MentionedChannel.name}\nID: ${MentionedChannel.id}\`\`\``)
    .addField("💬 <:doublefleche:773257544570765312> Caractéristiques", `\`\`\`Type: ${type}${encours = "" ? "" : encours}\`\`\``)
    .addField("📈 <:doublefleche:773257544570765312> Statistiques", `\`\`\`Création: ${moment(MentionedChannel.createdAt).format("DD/MM/YYYY | hh:mm:ss")}\nPosition: ${MentionedChannel.position}${type == "💬 Salon Textuel" ? `\nDecription: ${MentionedChannel.topic === null ? "❌" : "✅"}\nNombre de messages envoyés en total: ${MentionedChannel.messages.cache.size}` : ""}\`\`\``)
    message.channel.send(embed)

}

module.exports.help = {
    name: "channelinfo",
    alias: "ci",
    description: "Affiche les différentes informations d'un salon",
    usage: `channelinfo <channel/ID>`,
    category: "informations",
    cooldown: 7
}