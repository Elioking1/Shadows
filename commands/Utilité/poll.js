const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_SERVER"))
      return message.channel.send(
        `Vous n'avez pas la permission d'utiliser cette commande!`
      );

    let question = args.join(" ");
    if (!question)
      return message.channel.send(`Veuillez donner le titre de votre sondage!`);
    const Embed = new Discord.MessageEmbed()
      .setTitle(`Sondage de ${message.author.username}`)
      .setDescription(`${question}`)
      .setFooter(`✅ Oui - ❔ Je ne sais pas - ❌ Non`)
      .setColor(`RANDOM`);
    message.channel.send(Embed).then(sentMessage => {
    sentMessage.react("✅");
    sentMessage.react("❔");
    sentMessage.react("❌");
});
}

module.exports.help = {
    name: "poll",
    description: "Crée un sondage.",
    usage: `poll [question]`,
    example: "poll Aimez-vous les frites?",
    category: "utilité",
    cooldown: 15
}