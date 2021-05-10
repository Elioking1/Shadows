const Discord = require ("discord.js");
const randomthing = require("something-random-on-discord")
const random = new randomthing.Random()
 
module.exports.run = async (bot, message, args) => {
    let data = await random.getMeme()
    message.channel.send(data)
}
module.exports.help = {
  name: "meme",
  description: "Affiche des images drôles.",
  usage: `meme`,
  category: "fun",
  cooldown: 10
}