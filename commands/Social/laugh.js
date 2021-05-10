const Discord = require('discord.js');
const laughs = [
    "https://cdn.discordapp.com/attachments/695327593758589039/700232590220591104/tenor_18.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232590489288774/tenor_19.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232590757593148/tenor_9.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232591118434374/tenor_12.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232591428550717/tenor_20.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232591638396978/tenor_15.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232591885991986/tenor_16.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232592103964672/tenor_13.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232592405954600/tenor_14.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232592850419823/tenor_17.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232759834181702/tenor_28.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232760132108288/tenor_22.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232760404607016/tenor_23.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232760648007690/tenor_21.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232761285279765/tenor_26.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232761545457735/tenor_27.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232761763430400/tenor_24.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/700232761927139348/tenor_25.gif"
]

module.exports.run = async (bot, message, args) => {
    const laugh = laughs[Math.floor(Math.random() * laughs.length)];

    const embed = new Discord.MessageEmbed()
    .setTitle(`😂${message.author.username} rigole`)
    .setColor("RANDOM")
    .setImage(laugh);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "laugh",
        description: "Rigole.",
        usage: `laugh`,
        category: "social",
        cooldown: 10
    }