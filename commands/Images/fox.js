const Discord = require ("discord.js");
const got = require("got")
 
module.exports.run = async (bot, message, args) => {
    got('https://www.reddit.com/r/fox/random.json').then(response => { 
let content = JSON.parse(response.body);  
var fox = content[0].data.children[0].data.url; 
let wow = new Discord.MessageEmbed() 
.setTitle("🦊 Renard 🦊")
.setImage(fox) 
.setColor("RANDOM") 
message.channel.send(wow) 
}).catch(console.error);
}

module.exports.help = {
  name: "fox",
  description: "Image aléatoire de renard.",
  usage: `fox`,
  category: "images",
  cooldown: 5
}