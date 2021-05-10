const Discord = require('discord.js');
const { get } = require('axios');

module.exports.run = async (bot, message, args) => {
    let argument = args.join("+")
    if(argument.length >= 23) return message.channel.send("Ton message est très long")

if(argument.length <= 22) {
    let nombrealéa = Math.floor(Math.random() * 29)
    if(!argument) return message.channel.send("Veuillez rédiger le message de votre achievement style Minecraft!");

get(`https://minecraftskinstealer.com/achievement/${nombrealéa}/Achievement+Get%21/${argument}`, {
  responseType: 'arraybuffer'
})
  .then((res) => {
    message.channel.send({
      files: [{
        attachment: res.data,
        name: 'achievement.png'
      }]
    })
  })
  .catch((error) => console.error(`Something went wrong. Error: ${error}`));
}}

module.exports.help = {
    name: "achievement",
    description: "Affiche une quête style Minecraft avec votre message.",
    usage: "achievement [question]",
    example: "achievement Inviter Shadows",
    category: "images",
    cooldown: 7
}