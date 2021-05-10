const ms = require("ms");
const { MessageEmbed } = require("discord.js");
const Timers = new Map();
module.exports = {Timers: Timers};

module.exports.run = async (bot, message, args) => {

if (!args[0]) {
      return message.channel.send(
        `Veuillez préciser la durée de votre reminder!`
      );
    }
    if (!args[0].endsWith("d")) {
      if (!args[0].endsWith("h")) {
        if (!args[0].endsWith("m")) {
            if (!args[0].endsWith("s")) {
          return message.channel.send(
            `Vous n'avez pas utiliser un format convenable pour la durée de votre reminder!`
          );
        }
       }
      }
    }
    if (isNaN(args[0][0])) {
      return message.channel.send(`La durée que vous avez utilisé n'est pas un nombre!`);
    }
    let raison = args.slice(1).join(" ");
    if(!raison) {
        return message.channel.send("Veuillez indiquer la cause du reminder!")
    }
    if(ms(args[0]) > 1000 * 60 * 60 * 24 * 30) return message.channel.send("La durée ne peut pas dépasser 1 mois!")
    Timers.set(message.author.id + " G " + message.guild.name, {
      Guild: message.guild.name,
      Author: {
        Tag: message.author.tag,
        ID: message.author.id,
      },
      Time: ms(args[0]),
    });
    message.channel.send(
      "**" + message.author.username + "**, je vais vous rappeler pour ``" + raison + "`` dans " + args[0]
    );
    setTimeout(() => {
      message.author.send(`**Reminder:** ${raison}`);
      Timers.delete(message.author.id + " G " + message.guild.name);
    }, ms(args[0]));
}

module.exports.help = {
    name: "remindme",
    alias: "remind",
    alias2: "reminder",
    alias3: "rmd",
    description: "Rappelle de faire quelquechose.",
    usage: `remindme [durée] [texte]`,
    example: "remindme 2m Faire la vaisselle",
    category: "utilité",
    cooldown: 5
}