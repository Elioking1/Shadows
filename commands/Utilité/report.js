const Discord = require('discord.js')
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    let argument = args.join(" ");
    let report = message.guild.channels.cache.get(db.get(`reportChannel_${message.guild.id}`))
    if(!report) return message.channel.send("Le salon des rapports n'a pas été encore mis en place!")
    if(!argument) return message.channel.send("Veuillez mettre votre rapport!")
    const embed = new Discord.MessageEmbed()
    .setTitle("<a:sirene:737602821225971812> Un nouveau rapport est arrivé")
    .setDescription(`**${argument}**`)
    .setFooter(`Rapport de ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true}))
    message.channel.send("✅ Votre rapport a été renvoyé dans le salon des rapports avec succès!")
    report.send(embed)
}

module.exports.help = {
    name: "report",
    description: "Envoie un rapport.",
    usage: `report [texte]`,
    example: "report Ce membre m'a volé mon compte!",
    category: "utilité",
    cooldown: 43200
}