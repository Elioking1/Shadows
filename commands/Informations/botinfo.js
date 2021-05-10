const Discord = require ("discord.js");
const moment = require('moment')
const config = require("../../config.json")
 
module.exports.run = async (bot, message, args) => {
    function getUptime(bot) {
        let timestamp = bot.uptime
        var date = new Date(timestamp);
        var hours = date.getHours();
        var days = date.getDay()
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        return `${days}j ${hours}h ${minutes}min ${seconds}sec`
      }
    const embed = new Discord.MessageEmbed()
    .setTitle(":information_source: Infos sur le bot")
    .setDescription(`Voici les différentes infos sur le bot:`)
    .addField(":robot: <:doublefleche:773257544570765312> Nom + ID", `\`\`\`Nom: ${bot.user.username}\nDescriminateur: #${bot.user.discriminator}\nID: ${bot.user.id}\`\`\``)
    .addField("💻 <:doublefleche:773257544570765312> Créateur", `\`\`\`Nom du créateur: ${bot.users.cache.get("695313341404414001").username}\nDescriminateur: #${bot.users.cache.get("695313341404414001").discriminator}\nID: ${bot.users.cache.get("695313341404414001").id}\`\`\``)
    .addField(":gear: <:doublefleche:773257544570765312> Version + Système", `\`\`\`Version du bot: 3.0.0\nUptime: ${getUptime(bot)}\nMémoire du bot: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / 4000 MB\nLibrarie: discord.js\nVersion de la librarie: ${Discord.version}\nModule: nodejs\nVersion du module: ${process.versions.node}\`\`\``)
    .addField(":space_invader: <:doublefleche:773257544570765312> Statistiques", `\`\`\`Bot créé le: ${moment(bot.user.createdAt).format('DD/MM/YYYY | hh:mm:ss')}\nNombre de serveurs: ${bot.guilds.cache.size}\nNombre de salons: ${bot.channels.cache.size}\nNombre d'utilisateurs: ${bot.users.cache.size}\`\`\``)
    message.channel.send(embed)
}

module.exports.help = {
    name: "botinfo",
    alias: "bi",
    description: "Affiche les différentes informations du bot.",
    usage: `botinfo`,
    category: "informations",
    cooldown: 3
}