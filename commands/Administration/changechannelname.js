const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Je n'ai pas la permission de faire cela!")
    let salon = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    if(!salon) return message.channel.send("Veuillez mentionner ou donner l'ID d'un salon!")
    let anciennom = salon.name
    let sym = ""
    if(salon.type == "text") sym = "-"
    else sym = " "
    let newname = args.slice(1).join(sym)
    if(!newname) return message.channel.send("Veuillez renter le nouveau nom du salon!")
    if(anciennom == newname) return message.channel.send("Ce nom est déjà rentré pour ce salon!")
    salon.setName(newname).then(() => message.channel.send(`Le nom du salon a été changé avec succès de **${anciennom}** à **${newname}**!`)).catch(() => message.channel.send("Une erreur s'est produite!"))
}

module.exports.help = {
    name: "changechannelname",
    alias: "ccn",
    description: "Change le nom d'un salon.",
    usage: "changechannelname [salon/ID] [nouveau nom]",
    category: "administration",
    cooldown: 10
}