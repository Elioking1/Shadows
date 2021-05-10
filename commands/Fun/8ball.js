const Discord = require("discord.js");
const answers = [
    "oui.",
    "non.",
    "sans aucun doute.",
    "peut-être.",
    "je ne sais pas.",
    "bien sûr.",
    "je pense que oui.",
    "je pense que non.",
    "je ne peux pas répondre à cette question.",
    "je n'ai pas envie de répondre à cette question.",
    "demande moi plus tard.",
    "comme je le vois, oui.",
    "comme je le vois, non.",
    "je crois que oui.",
    "je crois que non.",
    "je ne peux pas prédire la réponse en ce moment."
]
 
module.exports.run = async (bot, message, args) => {
     let question = args.join(" ")
     if(!question) return message.channel.send("Veuillez poser une question!");
    const answer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.send(":8ball:" + message.author.username + ", " + answer)
 
}
 
module.exports.help = {
    name: "8ball",
    description: "Réponds à votre question.",
    usage: "8ball [question]",
    example: "8ball Suis-je énervant?",
    category: "fun",
    cooldown: 3
}