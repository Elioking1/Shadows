const Discord = require ("discord.js");
const got = require("got")
 
module.exports.run = async (bot, message, args) => {
    got('https://www.reddit.com/r/tea/random.json').then(response => { 
let content = JSON.parse(response.body);  
var tea = content[0].data.children[0].data.url; 
let wow = new Discord.MessageEmbed() 
.setTitle("🍵 Thé 🍵")
.setImage(tea) 
.setColor("RANDOM") 
message.channel.send(wow) 
}).catch(console.error);
}

module.exports.help = {
  name: "tea",
  description: "Image aléatoire de thé.",
  usage: `tea`,
  category: "images",
  cooldown: 5
}