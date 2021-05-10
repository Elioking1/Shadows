const Discord = require('discord.js');
const sleepys = [
    "https://cdn.discordapp.com/attachments/695327593758589039/699895893989785630/tenor_14.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699895894538977310/tenor_15.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699895895210196992/tenor_13.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699895895709188137/tenor_18.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699895896149721128/tenor_19.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699895897042976808/tenor_17.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699895896623808552/tenor_16.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699895897961529394/tenor_9.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699895898678886410/tenor_12.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699895899018756136/tenor_20.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699896250207699004/tenor_25.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699896250694238218/tenor_26.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699896250996097094/tenor_23.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699896251533099088/tenor_29.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699896251725905940/tenor_27.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699896252023701544/tenor_28.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699896252242067476/tenor_22.gif",
    "https://cdn.discordapp.com/attachments/695327593758589039/699896252699246673/tenor_21.gif"
]

module.exports.run = async (bot, message, args) => {
    const sleepy = sleepys[Math.floor(Math.random() * sleepys.length)];

    const embed = new Discord.MessageEmbed()
    .setTitle(`💤${message.author.username} est fatigué(e)`)
    .setColor("RANDOM")
    .setImage(sleepy);
    message.channel.send(embed)
    }
    
    module.exports.help = {
        name: "sleepy",
        description: "Partage votre fatigue.",
        usage: `sleepy`,
        category: "social",
        cooldown: 10
    }