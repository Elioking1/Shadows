module.exports.run = async (bot, message, args) => {
    let mentionedUser = message.mentions.users.first() || message.author;
    let numnote = Math.floor(Math.random() * 10)
    let argument = args.join(" ");
    if(!argument) {
        message.channel.send(`Je note **${mentionedUser.username}** ${numnote}/10.`)
    }
    else if(argument){
        message.channel.send(`Je note **${argument}** ${numnote}/10.`)
    }
}

module.exports.help = {
    name: "rate",
    alias: "note",
    description: "Note quelqu'un ou quelquechose.",
    usage: `rate <user/texte>`,
    category: "fun",
    cooldown: 5
}