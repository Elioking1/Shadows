module.exports.run = async (bot, message, args) => {
    if(!message.guild.me.hasPermission("MUTE_MEMBERS")) return message.channel.send( "Je n'ai pas la permission de faire cela!" ); 
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if (!message.mentions.members.first()) return message.channel.send( `Veuillez mentionner le membre à démuter dans son salon vocal!` ); 
    if(message.mentions.members.first().user.id == message.author.id) return message.channel.send("Vous ne pouvez pas démuter vous même!")
    let { channel } = message.mentions.members.first().voice; 
    if (!channel) return message.channel.send(`Le membre mentionné se trouve dans aucun salon vocal!`); 
    if(!message.mentions.members.first().voice.serverMute) return message.channel.send("Le membre mentionné est déjà démute!")
    message.mentions.members.first().voice.setMute(false); 
    message.channel.send(`Le membre ${message.mentions.members.first()} a bien été démuté dans le salon vocal **${channel.name}** !`)
  };
 
module.exports.help = {
    name: "voiceunmute",
    description: "Démute le membre mentionné dans son vocal.",
    usage: `voiceunmute [user]`,
    category: "modération",
    cooldown: 10
}