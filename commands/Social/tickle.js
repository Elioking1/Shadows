
const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first() ? message.mentions.users.first() : message.guild.members.cache.get(args[0]) ? message.guild.members.cache.get(args[0]).user : bot.user
    const { get } = require("https");

    get("https://nekos.life/api/v2/img/tickle", (res) => {
        const { statusCode } = res;
        if (statusCode != 200) {
            res.resume;
        }
        res.setEncoding("utf8");
        let rawData = '';
        res.on("data", (chunk) => {
            rawData += chunk;
        });
        res.on("end", () => {
            try {
                const parsedData = JSON.parse(rawData);
                let embed = new Discord.MessageEmbed()
                .setTitle(`🤣 ${message.author.username} chatouille ${user.username}`)
                .setImage(parsedData.url);
                message.channel.send(embed)
            } catch (e) {
                console.error(e.message);
                message.channel.send("Une erreur est survécu! Ne vous inquiétez pas ce n'est pas à cause de vous! Mon owner fixe ce problème!");
            }
        });
    }).on("error", (err) => {
        console.error(err.message);
    });
}
module.exports.help = {
    name: "tickle",
    description: "Chatouille le bot ou le membre mentionné.",
    usage: `tickle <user/ID>`,
    category: "social",
    cooldown: 10
}