const Discord = require('discord.js')
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    let argument = args.join(" ");
    let suggest = message.guild.channels.cache.get(db.get(`SuggestChannel_${message.guild.id}`))
    if(!suggest) return message.channel.send("Le salon des suggestions n'a pas été encore mis en place!")
    if(!argument) return message.channel.send("Veuillez mettre votre suggestion!")
    const embed = new Discord.MessageEmbed()
    .setTitle("💡 Une nouvelle suggestion est arrivé")
    .setDescription(`**${argument}**`)
    .setFooter(`Suggestion de ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true}))
    message.channel.send("✅ Votre suggestion a été renvoyé dans le salon des suggestions avec succès!")
    suggest.send(embed).then(sentMessage => {
        sentMessage.react("✅");
        sentMessage.react("❌");
    });
}

module.exports.help = {
    name: "suggest",
    description: "Envoie une suugestion.",
    usage: `suggest [texte]`,
    example: "suggest Rajouter des commandes dans le bot Shadows.",
    category: "utilité",
    cooldown: 43200
}