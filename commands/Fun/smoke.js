const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const smokemessage = await message.channel.send("Je suis en train de fumer!");
    smokemessage.edit("🚬");
    smokemessage.edit("🚬☁");
    smokemessage.edit("🚬☁☁");
    smokemessage.edit("🚬☁☁☁");
    smokemessage.edit("🚬☁☁");
    smokemessage.edit("🚬☁");
    smokemessage.edit("🚬");
    smokemessage.edit("J'ai fini de fumer!");
}

module.exports.help = {
    name: "smoke",
    description: "Fume.",
    usage: `smoke`,
    category: "fun",
    coooldown: 7
}