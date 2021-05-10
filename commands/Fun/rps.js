const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let replies = ['pierre', 'feuille', 'ciseaux'];
    let result = Math.floor(Math.random() * replies.length);
    let symbolmoi = ""
    let symbolbot = ""

    if (!args[0]) return message.channel.send(`Veuillez mettre l'une de ses réponses: \`${replies.join(', ')}\``);
    let uReply = args[0].toLowerCase();
    if (!replies.includes(uReply)) return message.channel.send(`Seulement l'une de ces réponses est acceptée: \`${replies.join(', ')}\``);
    if(uReply == "pierre") symbolmoi = "👊"
    else if(uReply == "feuille") symbolmoi = "✋"
    else if(uReply == "ciseaux") symbolmoi = "✌️"

    if(replies[result] == "pierre") symbolbot = "👊"
    else if(replies[result] == "feuille") symbolbot = "✋"
    else if(replies[result] == "ciseaux") symbolbot = "✌️"

    if (replies[result] === uReply) {
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField(message.author.username, symbolmoi , true)
        .addField("VS", ":zap:", true)
        .addField(bot.user.username, symbolbot, true)
        .addField("Résultat", "Égalité", true)
        message.channel.send(embed)
    } else if (uReply === 'pierre') {
        if (replies[result] === 'ciseaux') {
            let embed2 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .addField(message.author.username, symbolmoi , true)
            .addField("VS", ":zap:", true)
            .addField(bot.user.username, symbolbot, true)
            .addField("Résultat", "Vous avez gagné", true)
            message.channel.send(embed2)
        }
        else {
            let embed3 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .addField(message.author.username, symbolmoi , true)
            .addField("VS", ":zap:", true)
            .addField(bot.user.username, symbolbot, true)
            .addField("Résultat", "Vous avez perdu", true)
            message.channel.send(embed3)
        }
    } else if (uReply === 'ciseaux') {
        if (replies[result] === 'feuille') {
            let embed4 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .addField(message.author.username, symbolmoi , true)
            .addField("VS", ":zap:", true)
            .addField(bot.user.username, symbolbot, true)
            .addField("Résultat", "Vous avez gagné", true)
            message.channel.send(embed4)
        }
        else {
            let embed5 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .addField(message.author.username, symbolmoi , true)
            .addField("VS", ":zap:", true)
            .addField(bot.user.username, symbolbot, true)
            .addField("Résultat", "Vous avez perdu", true)
            message.channel.send(embed5)
        }
    } else if (uReply === 'feuille') {
        if (replies[result] === 'pierre') {
            let embed6 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .addField(message.author.username, symbolmoi , true)
            .addField("VS", ":zap:", true)
            .addField(bot.user.username, symbolbot, true)
            .addField("Résultat", "Vous avez gagné", true)
            message.channel.send(embed6)
        }
        else {
            let embed7 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .addField(message.author.username, symbolmoi , true)
            .addField("VS", ":zap:", true)
            .addField(bot.user.username, symbolbot, true)
            .addField("Résultat", "Vous avez perdu", true)
            message.channel.send(embed7)
        }
    }
}

module.exports.help = {
    name: "rps",
    alias: "pfc",
    alias2: "shifumi",
    description: "Joue à pierre,feuille, ciseaux avec le bot.",
    usage: `rps [texte]`,
    example: "rps feuille",
    category: "fun",
    cooldown: 7
}