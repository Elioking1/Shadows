const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {
    const { get } = require("https");

    get("https://nekos.life/api/v2/img/solog", (res) => {
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
                .setTitle("Solo GIF")
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
    name: "sologif",
    alias: "sgif",
    description: "Affiche un gif de catégorie solo.",
    usage: `sologif`,
    category: "nsfw",
    cooldown: 10
}