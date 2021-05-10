module.exports.run = async (bot, message, args) => {
    bot.joker.randomVDM().then((vdm) => {
        message.channel.send(`**${message.author.username},** ${vdm.content} VDM`);
    });
}
 
module.exports.help = {
    name: "vdm",
    alias: "fml",
    description: "Raconte un histoire de vie de merde.",
    usage: `vdm`,
    category: "fun",
    cooldown: 10
}