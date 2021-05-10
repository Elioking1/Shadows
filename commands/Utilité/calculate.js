const Discord = require('discord.js');
const math = require('mathjs');

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send("Veuillez mettre un calcul!")
    let resp;
    try{
        resp = math.evaluate(args.join(' ').replace("x", "*"));
    }catch (e) {
        return message.channel.send("Une erreur s'est produite lors du calcul!")
    }
    const embed = new Discord.MessageEmbed()
    .setColor("#ff6700")
    .setTitle("Calcul de Maths")
    .addField("Calcul", `\`\`\`js\n${args.join(' ').replace("x", "*")}\`\`\``)
    .addField("Réponse", `\`\`\`js\n${resp}\`\`\``)
    .setThumbnail("https://image.freepik.com/free-vector/calculator-with-modern-flat-style_3322-74.jpg")
    message.channel.send(embed)
}

module.exports.help = {
    name: "calculate",
    alias: "calc",
    description: "Effectue un calcul de maths.",
    usage: `calculate [calcul]`,
    example: "calculate 10 * 49 - (35 + 17)",
    category: "utilité",
    cooldown: 3
}