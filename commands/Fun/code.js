const morse = require("morse")
 
module.exports.run = async (bot, message, args) => {
    let argument = args.join(" ")
    if(!argument) return message.channel.send("Veuillez rédiger un message à coder!")
    message.channel.send(`**${message.author.username},** ${morse.encode(argument)}`)
}
 
module.exports.help = {
    name: "code",
    description: "Code un message.",
    usage: `code`,
    example: "code Elioking1",
    category: "fun",
    cooldown: 5
}