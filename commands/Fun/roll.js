const Discord = require('discord.js');
const cooldownroll = new Set()

module.exports.run = async (bot, message, args) => {
    const argument = args.join(" ");
    if(!argument) {
        if(!args[0]){
    let nombrealéa = Math.floor(Math.random() * 100 + 1)
    message.channel.send("**" + message.author.username + "**, tu as roll le numéro **" + nombrealéa + "** !")
    }}
    else if(args[0]){
    if(!isNaN(args[0])){
        let max = args[0]
        let nombrealéamax = Math.floor(Math.random() * max + 1)
        message.channel.send("**" + message.author.username + "**, tu as roll le numéro **" + nombrealéamax + "** !")
    }
    else if(!Number(args[0])){
        return message.channel.send("Une erreur s'est produite car vous n'avez pas rentrer un nombre dans la valeur maximal")
    }
    
    }
}

module.exports.help = {
    name: "roll",
    description: "Envoie un numéro aléatoire avec un maximum optionnel. (Le max par défaut est 100).",
    usage: `roll <nombre>`,
    category: "fun",
    cooldown: 5
}