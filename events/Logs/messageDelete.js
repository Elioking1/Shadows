const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, message) => {
    let logs = message.guild.channels.cache.get(db.get(`Logs_${message.guild.id}`))
    if(logs) {
      if(message.author.bot) return
    const embeddelete = new Discord.MessageEmbed()
    .setTitle("🚫 Suppression d'un message")
    .addField("Auteur", message.author.tag, true)
    .addField("ID de l'auteur", message.author.id, true)
    .addField("Salon", `<#${message.channel.id}>`)
    .addField("Contenu", message.content ? message.content : "Embed/Image", true)
    .setThumbnail("https://st2.depositphotos.com/5266903/8456/v/450/depositphotos_84569362-stock-illustration-trash-can-flat-yellow-color.jpg")
    logs.send(embeddelete)
      }
}