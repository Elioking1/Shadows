const Discord = require ("discord.js");
const got = require("got")
 
module.exports.run = async (bot, message, args) => {
    got('https://www.reddit.com/r/interestingasfuck/random.json').then(response => { let content = JSON.parse(response.body); 
var title = content[0].data.children[0].data.title; 
var amazeme = content[0].data.children[0].data.url; 
let wow = new Discord.MessageEmbed() 
.setDescription(`**` + title + `**`) 
.setImage(amazeme) 
.setColor("RANDOM") 
message.channel.send(wow) 
}).catch(console.error);
}
module.exports.help = {
  name: "amazing",
  description: "Affiche des choses incroyables.",
  usage: `amazing`,
  category: "images",
  cooldown: 10
}