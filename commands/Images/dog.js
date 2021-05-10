const Discord = require ("discord.js");
const Zoro = require("zoro-api")
 
module.exports.run = async (bot, message, args) => {
let img = await Zoro.dog()
let wow = new Discord.MessageEmbed() 
.setTitle("🐶 Chien 🐶")
.setImage(img) 
.setColor("RANDOM") 
message.channel.send(wow) 
}
module.exports.help = {
  name: "dog",
  description: "Image aléatoire de chien.",
  usage: `dog`,
  category: "images",
  cooldown: 5
}