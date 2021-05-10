const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Je n'ai pas les permissions suffisantes!")

    const user = message.mentions.users.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send("Veuillez mentionner le membre à ban ou donner son ID!")
    if (user) {
      const member = message.guild.member(user);
      let reason = args[1]
      if (member) {

        member
          .ban({
            reason: `${reason ? reason : "Il était irrespectueux!"}`,
          })
          .then(() => {
            message.reply(`Le membre ${user.tag} a été ban avec succès du serveur ${message.guild.name} ${reason ? `pour la raison suivante: **${reason}**` : ""}!`);
          })
          .catch(err => {
            message.reply('Je suis incapable de ban cet utilisateur!');
            console.error(err);
          });
      } else {
        message.reply("Ce membre n'est pas dans le serveur!");
      }
    } else {
      message.reply("Vous n'avez mentionné personne à ban!");
    }
  };
 
module.exports.help = {
    name: "ban",
    description: "Ban quelqu'un avec une raison optionnelle.",
    usage: `ban [user/ID] <raison>`,
    category: "modération",
    cooldown: 10
}