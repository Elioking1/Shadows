const Discord = require("discord.js")
const canvas = require("discord-canvas")
const config = require("../../config.json")

module.exports.run = async (bot, message, args) => {
  const shop = new canvas.FortniteShop();
  
const image = await shop
  .setToken(config.fortnitetoken)
  .lang("fr")
  .dateFormat("dddd Do MMMM YYYY")
  .setText("header", "BOUTIQUE FORTNITE")
.setText("daily", "QUOTIDIEN")
.setText("featured", "EN VEDETTE")
.setText("date", "Boutique fortnite du {date}")
.setText("footer", "Généré par Omnitrix")
  .toAttachment();

let attachment = new Discord.MessageAttachment(image, "shop.png");

message.channel.send(attachment);
}

module.exports.help = {
    name: "fortniteshop",
    alias: "fnshop",
    alias2: "fs",
    description: "Affiche la boutique fortnite.",
    usage: `fortniteshop`,
    category: "utilité",
    cooldown: 10
}