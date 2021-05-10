const Discord = require('discord.js');
const cooldown = new Set()
const angrys = [
    "https://cdn.discordapp.com/attachments/695954676402618388/700042838506995712/tenor_20.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/700042838796140594/tenor_19.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/700042839043866714/tenor_13.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/700042839760830614/tenor_9.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/700042839463297075/tenor_14.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/700042839983259658/tenor_12.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/700042840343838841/tenor_17.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/700042840595759104/tenor_18.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/700042840855806054/tenor_15.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/700042841094619226/tenor_16.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/700043159983357972/tenor_21.gif",
    "https://cdn.discordapp.com/attachments/695954676402618388/700043160453382224/tenor_22.gif",
    "https://pa1.narvii.com/6140/8f118c20a21605b25b79f6dbdd4bf7494dd8467b_hq.gif"
]

module.exports.run = async (bot, message, args) => {
    const angry = angrys[Math.floor(Math.random() * angrys.length)];

    const embed = new Discord.MessageEmbed()
    .setTitle(`😠 **${message.author.username}** est en colère`)
    .setColor("RANDOM")
    .setImage(angry);
    message.channel.send(embed)
}
    
    module.exports.help = {
        name: "angry",
        description: "Partage votre colère",
        usage: `angry`,
        category: "social",
        cooldown: 10
    }