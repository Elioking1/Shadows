module.exports.run = async (bot, message, args) => {
    if (!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send( "Je n'ai pas la permission de faire cela!" ); 
    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if (!message.mentions.members.first()) return message.channel.send( `Veuillez mentionner le membre qui sera déconnnecté d'un salon vocal!` ); 
    if(message.mentions.members.first().user.id == message.author.id) return message.channel.send("Vous ne pouvez pas déconnecter vous même!")
    let { channel } = message.mentions.members.first().voice; 
    if (!channel) return message.channel.send(`Le membre mentionné se trouve dans aucun salon vocal!`); 
    message.mentions.members.first().voice.kick(); 
    message.channel.send(`Le membre ${message.mentions.members.first()} a bien été déconnecté du salon vocal **${channel.name}** !`)
  };
 
module.exports.help = {
    name: "voicekick",
    alias: "vk",
    description: "Déconnecte le membre mentionné du vocal.",
    usage: `voicekick [user]`,
    category: "modération",
    cooldown: 10
}