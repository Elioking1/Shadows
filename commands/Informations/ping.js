const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {

let message1 = ":ping_pong: Pong"
 
    waiting = await message.channel.send(message1).catch(console.error);
 
    let message2 = `:ping_pong: Pong\nLatence du bot: ${bot.ws.ping} ms\nLatence API: ${waiting.createdTimestamp - message.createdTimestamp} ms`
    waiting.edit(message2).catch(console.error);
}
module.exports.help = {
  name: "ping",
  description: "Affiche la latence du bot.",
  usage: `ping`,
  category: "informations",
  cooldown: 3
}