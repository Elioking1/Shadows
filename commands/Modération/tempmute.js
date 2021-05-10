const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

    let tomute = message.guild.member(message.mentions.users.first());

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    if(!tomute) return message.channel.send("Veuillez mentionner un utilisateur à mute!");
    if(tomute.user.tag == message.author.id) return message.channel.send("Vous ne pouvez pas mutez vous même!")
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je n'arrive pas à muter cette utilisateur!");
    let muterole = message.guild.roles.cache.find(role => role.name === 'Muted');
    if(!muterole){
            muterole = await message.guild.roles.create({
                data: {
                    name: "Muted",
                color: "#000000",
                permissions: []

            }})
            message.guild.channels.cache.forEach(async (channel, id) => {
                await channel.updateOverwrite(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    CONNECT: false
                });
            });
    }
    if(tomute.roles.cache.has(muterole.id)) return message.channel.send("l'utilisateur mentionné est déjà mute!")
    let mutetime = args[1];
    if(!mutetime) return message.channel.send("Veuillez spécifier un temps!");
    if (isNaN(args[1][0])) return message.channel.send(`La durée rentrée n'est pas un nombre!`);
    if (
        !mutetime.endsWith("d") &&
        !mutetime.endsWith("h") &&
        !mutetime.endsWith("m") &&
        !mutetime.endsWith("s")
      )
        return message.channel.send(
          `Le format de la durée n'est pas correcte!`
        );
        if(ms(mutetime) > 1000 * 60 * 60 * 24 * 30) return message.channel.send("La durée ne peut pas dépasser 1 mois!")


    await tomute.roles.add(muterole.id);
    message.channel.send(`${tomute.user.tag} a été mute pour ${ms(ms(mutetime))}!`)

    setTimeout(() => {
        tomute.roles.remove(muterole.id);
}, ms(mutetime));
}

module.exports.help = {
    name: "tempmute",
    description: "Mute quelqu'un pendant une durée limitée.",
    usage: `tempmute [user]`,
    category: "modération",
    cooldown: 15
  }