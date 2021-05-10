const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js");

  module.exports.run = async (bot, message, args) => {
      if(!args.length) return message.channel.send("Veuillez rentrer le nom d'un animé!")
    const option = {
        url: `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`, 
        method: `GET`, 
        headers: { 'Content-Type': "application/vnd.api+json", 'Accept': "application/vnd.api+json" }, 
        json: true
      }
  
  const msg = await message.channel.send("Recherche en cours...")
    get(option).then(body => {
      
      let embed = new MessageEmbed()
      .setTitle(body.data[0].attributes.slug) 
      .setColor("RANDOM") 
      .setDescription(body.data[0].attributes.synopsis) 
      .setThumbnail(body.data[0].attributes.posterImage.original) 
      .addField("Notations", body.data[0].attributes.averageRating) 
      .addField("Nombre total d'épisodes", body.data[0].attributes.episodeCount) 
      .setImage(body.data[0].attributes.coverImage.large)
      
      message.channel.send(embed)
      msg.delete()
    }).catch(e => {
        msg.delete()
        return message.channel.send(`L'animé **${args[0]}** n'existe pas!`)
    })
}

module.exports.help = {
    name: "anime",
    description: "Recherche un anime.",
    usage: `anime <nom d'un anime>`,
    example: "anime Naruto",
    category: "utilité",
    cooldown: 7
  }