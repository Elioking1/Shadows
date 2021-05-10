const Discord = require('discord.js');
const { get } = require('axios');

module.exports.run = async (bot, message, args) => {
  let argument = args.join("+")
  if(argument.length >= 23) return message.channel.send("Ton message est très long")

if(argument.length <= 22) {
    if(!argument) return message.channel.send("Veuillez rédiger le message de votre captcha!");

get(`https://api.alexflipnote.dev/captcha?text=${argument}`, {
  responseType: 'arraybuffer'
})
  .then((res) => {
    message.channel.send({
      files: [{
        attachment: res.data,
        name: 'captcha.png'
      }]
    })
  })
  .catch((error) => console.error(`Something went wrong. Error: ${error}`));
}}

module.exports.help = {
    name: "captcha",
    description: "Affiche un captcha avec votre texte.",
    usage: `captcha [texte]`,
    example: "captcha Tu es un bouffon",
    category: "images",
    cooldown: 7
}