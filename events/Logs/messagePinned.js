const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, message) => {
    let logs = message.guild.channels.cache.get(db.get(`Logs_${message.guild.id}`))
    if(logs) {
    const embed = new Discord.MessageEmbed()
    .setTitle("📌 Nouveau message épinglé")
    .addField("Épingleur", message.author.tag, true)
    .addField("ID de l'épingleur", message.author.id, true)
    .addField("Salon", `<#${message.channel.id}>`)
    .addField("Contenu", message.content ? message.content : "Embed/Image", true)
    .setThumbnail("https://cdn3.iconfinder.com/data/icons/office-flat-8/32/Pin-512.png")
    logs.send(embed)
      }
}