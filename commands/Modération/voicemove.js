module.exports.run = async (bot, message, args) => {
    if (!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send( "Je n'ai pas la permission de faire cela!" ); 
    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if (!message.mentions.members.first()) return message.channel.send( `Veuillez mentionner le membre qui sera déplacer d'un salon vocal!` );
    if(message.mentions.members.first().user.id == message.author.id) return message.channel.send("Vous ne pouvez pas déplacer vous même!") 
    let { channel } = message.mentions.members.first().voice; 
    if (!channel) return message.channel.send(`Le membre mentionné se trouve dans aucun salon vocal!`); 
    let channelid = message.guild.channels.cache.get(args[1])
    if(!channelid) return message.channel.send("Veuillez mettre l'id du salon vocal dans lequel vous souhaitez déplacer le membre mentionné!")
    if(channelid.type != "voice") return message.channel.send("L'id du salon donné n'est pas un salon vocal!")
    if(channel == channelid) return message.channel.send("Le membre mentionné est déjà dans le salon vocal que vous souhaitez le faire déplacer!")
    message.mentions.members.first().voice.setChannel(channelid.id); 
    message.channel.send(`Le membre ${message.mentions.members.first()} a bien été déplacé du salon vocal **${channel.name}** au salon vocal **${channelid.name}** !`)
  };
 
module.exports.help = {
    name: "voicemove",
    alias: "vm",
    description: "Déplace le membre mentionné de son vocal actuel à un autre.",
    usage: `voicemove [user] [ID du salon vocal]`,
    category: "modération",
    cooldown: 10
}