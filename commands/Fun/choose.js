module.exports.run = async (bot, message, args) => {
    let argdep = args.join(" ")
    if(!argdep) return message.channel.send("Veuillez mettre vos choix!")
    let argresult = argdep.split(`/`)
    let choix = Math.floor(Math.random() * argresult.length)
    let result = argresult[choix]
    if(!message.content.includes("/")) return message.channel.send("Il y a qu'un seul choix proposé ici!")
    message.channel.send(`**${message.author.username},** je choisis ${result}!`)
}

module.exports.help = {
    name: "choose",
    description: "Fait un choix.",
    usage: `choose [choix1]/[choix2]/<choix3>/etc..`,
    example: "choose PS4/Xbox",
    category: "fun",
    cooldown: 3
}