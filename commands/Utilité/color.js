const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js");

  module.exports.run = async (bot, message, args) => {
      if(!args.length) return message.channel.send("Veuillez le code Hex d'une couleur (sans le #)!")
    const options = {
        url: `https://api.alexflipnote.dev/color/${args[0]}`,
        json: true
      }
  
    get(options).then(body => {
      
      let embed = new MessageEmbed()
      .addField("Nom", body.name, true)
      .addField("HEX", body.hex, true)
      .addField("RGB", body.rgb, true)
      .addField("Luminosité", body.brightness)
      .setThumbnail(body.image)
      .setColor(body.hex)
      
      message.channel.send(embed)
    }).catch(e => {
        return message.channel.send(`**${args[0]}** n'est pas un code hex d'une couleur!`)
    })
}

module.exports.help = {
    name: "color",
    description: "Recherche une couleur à partir de son code HEX.",
    usage: `color <code hex d'une couleur>`,
    example: "color 95FF00",
    category: "utilité",
    cooldown: 5
  }