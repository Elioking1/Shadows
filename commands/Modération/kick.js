const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    const user = message.mentions.users.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send("Veuillez mentionner le membre à kick ou donner son ID!")
    if (user) {
      const member = message.guild.member(user);
      let reason = args[1]
      if (member) {
        member
          .kick(`${reason ? reason : "Il a été irrespectueux!"}`)
          .then(() => {
            message.reply(`Le membre ${user.tag} a été kick avec succès du serveur ${message.guild.name} ${reason ? `pour la raison suivante: **${reason}**` : ""}!`);
          })
          .catch(err => {
            message.reply('Je suis incapable de kick cet utilisateur!');
            console.error(err);
          });
      } else {
        message.reply("Ce membre n'est pas dans le serveur!");
      }
    } else {
      message.reply("Vous n'avez mentionné personne à kick!");
    }
  };
 
module.exports.help = {
    name: "kick",
    description: "Expulse quelqu'un avec une raison optionnelle.",
    usage: `kick [user/ID] <raison>`,
    category: "modération",
    cooldown: 10
}