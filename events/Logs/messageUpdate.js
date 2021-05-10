const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;
    let logs = oldMessage.guild.channels.cache.get(db.get(`Logs_${oldMessage.guild.id}`))
    if(logs) {
    if(oldMessage.content == newMessage.content) return;
    const embededit = new Discord.MessageEmbed()
    .setTitle("✏️ Modification d'un message")
    .addField("Auteur", oldMessage.author.tag, true)
    .addField("ID de l'auteur", oldMessage.author.id, true)
    .addField("Salon", `<#${oldMessage.channel.id}>`)
    .addField("Ancien Contenu", oldMessage.content, true)
    .addField("Nouveau Contenu", newMessage.content, true)
    .setThumbnail("https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/pencil.png")
    logs.send(embededit)
  }
}