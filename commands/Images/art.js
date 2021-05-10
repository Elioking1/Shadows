const Discord = require ("discord.js");
const got = require("got")
 
module.exports.run = async (bot, message, args) => {
    got('https://www.reddit.com/r/art/random.json').then(response => { 
let content = JSON.parse(response.body);  
var art = content[0].data.children[0].data.url; 
let wow = new Discord.MessageEmbed() 
.setTitle("🎨 Art 🎨")
.setImage(art) 
.setColor("RANDOM") 
message.channel.send(wow) 
}).catch(console.error);
}
module.exports.help = {
  name: "art",
  description: "Image aléatoire d'art.",
  usage: `art`,
  category: "images",
  cooldown: 5
}