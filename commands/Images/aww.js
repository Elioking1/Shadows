const Discord = require ("discord.js");
const got = require("got")
 
module.exports.run = async (bot, message, args) => {
    got('https://www.reddit.com/r/aww/random.json').then(response => { 
let content = JSON.parse(response.body);  
var aww = content[0].data.children[0].data.url; 
let wow = new Discord.MessageEmbed() 
.setTitle("Aww")
.setImage(aww) 
.setColor("RANDOM") 
message.channel.send(wow) 
}).catch(console.error);
}
module.exports.help = {
  name: "aww",
  description: "Image aléatoire d'animaux mignons.",
  usage: `aww`,
  category: "images",
  cooldown: 5
}