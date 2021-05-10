const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js");

  module.exports.run = async (bot, message, args) => {
      if(!args.length) return message.channel.send("Veuillez rentrer le nom d'un pokémon!")
    const options = {
        url: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${args[0]}`,
        json: true
      }
  
  const msg = await message.channel.send("Recherche en cours...")
    get(options).then(async body => {
      
      let embed = new MessageEmbed()
      .setAuthor(body.name, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.typeIcon}`)
      .setDescription(body.info.description)
      .setThumbnail(`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.photo}`)
      .addField("Santé", `${body.hp} points de santé`, true)
      .addField("Type", body.info.type, true)
      .setColor("RANDOM")
      .setFooter(`Point Faible du pokémon - ${body.info.weakness}`, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.weaknessIcon}`)
      message.channel.send(embed)
      msg.delete()
    }).catch(e => {
        msg.delete()
        return message.channel.send(`Le pokémon **${args[0]}** n'existe pas!`)
    })
}

module.exports.help = {
    name: "pokemon",
    description: "Recherche un pokémon.",
    usage: `pokemon <nom d'un pokemon>`,
    example: "pokemon Pikachu",
    category: "utilité",
    cooldown: 7
  }