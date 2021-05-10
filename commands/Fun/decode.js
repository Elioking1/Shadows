const morse = require("morse")
 
module.exports.run = async (bot, message, args) => {
    let argument = args.join(" ")
    if(!argument) return message.channel.send("Veuillez rédiger un message à décoder!")
    message.channel.send(`**${message.author.username},** ${morse.decode(argument)}`)
}
 
module.exports.help = {
    name: "decode",
    description: "Décode un message.",
    usage: `decode`,
    example: "decode . .-.. .. --- -.- .. -. --. .----",
    category: "fun",
    cooldown: 5
}