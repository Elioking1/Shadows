const Discord = require ("discord.js");
const Zoro = require("zoro-api")
 
module.exports.run = async (bot, message, args) => {
let img = await Zoro.cat()
let wow = new Discord.MessageEmbed() 
.setTitle("🐱 Chat 🐱")
.setImage(img) 
.setColor("RANDOM") 
message.channel.send(wow) 
}
module.exports.help = {
  name: "cat",
  description: "Image aléatoire de chat.",
  usage: `cat`,
  category: "images",
  cooldown: 5
}