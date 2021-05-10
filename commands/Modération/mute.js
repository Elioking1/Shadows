const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let tomute = message.guild.member(message.mentions.users.first());

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
    if(!tomute) return message.reply("Veuillez mentionner un utilisateur à mute!");
    if(tomute.id == message.author.id) return message.reply("Vous ne pouvez pas mutez vous même!")
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Je n'arrive pas à muter cette utilisateur!");
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
    if(tomute.roles.cache.has(muterole.id)) return message.reply("l'utilisateur mentionné est déjà mute!")

    await tomute.roles.add(muterole.id);
    message.reply(`<@${tomute.id}> a été mute`)
}

module.exports.help = {
    name: "mute",
    description: "Mute quelqu'un",
    usage: `mute [user]`,
    category: "modération",
    cooldown: 10
  }