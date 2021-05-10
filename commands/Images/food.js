const Discord = require ("discord.js");
const got = require("got")
 
module.exports.run = async (bot, message, args) => {
    got('https://www.reddit.com/r/food/random.json').then(response => { 
let content = JSON.parse(response.body);  
var food = content[0].data.children[0].data.url; 
let wow = new Discord.MessageEmbed() 
.setTitle("🍔Nourriture🍔")
.setImage(food) 
.setColor("RANDOM") 
message.channel.send(wow) 
}).catch(console.error);
}
module.exports.help = {
  name: "food",
  description: "Affiche des images aléatoires de nourriture.",
  usage: `food`,
  category: "images",
  cooldown: 5
}