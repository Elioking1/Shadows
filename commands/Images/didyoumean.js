const Discord = require('discord.js');
const { get } = require('axios');

module.exports.run = async (bot, message, args) => {
    let argdep = args.join("+")
    if(!argdep) return message.channel.send("Veuillez mettre un texte contenant un / !")
    let argresult = argdep.split(`/`)
    if(!message.content.includes("/")) return message.channel.send("Veuillez mettre un / dans votre argument!")
  if(argresult.length >= 15) return message.channel.send("Ton message est très long!")

if(argresult.length <= 14) {

get(`https://api.alexflipnote.dev/didyoumean?top=${argresult[0]}&bottom=${argresult[1]}`, {
  responseType: 'arraybuffer'
})
  .then((res) => {
    message.channel.send({
      files: [{
        attachment: res.data,
        name: 'didyoumean.png'
      }]
    })
  })
  .catch((error) => console.error(`Something went wrong. Error: ${error}`));
}}

module.exports.help = {
    name: "didyoumean",
    alias: "dym",
    description: "Affiche dans la barre de recherche votre premier texte et dans le (tu voulais dire?) votre second texte.",
    usage: `didyoumean [texte1/texte2]`,
    example: "didyoumean Axael/Spencer X",
    category: "images",
    cooldown: 7
}