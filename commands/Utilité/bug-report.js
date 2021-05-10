const config = require("../../config.json")
const Discord = require("discord.js")

  module.exports.run = async (bot, message, args) => {
      const channel = bot.channels.cache.get(config.channels.bugs)
      let bug = args.join(" ")
      if(!bug) return message.channel.send("Mettez le bug à rapporter!")
      const embed = new Discord.MessageEmbed()
      .setTitle("<:bughunter:769234537116729344> Nouveau bug détecté")
      .setDescription(`\`\`\`${bug}\`\`\``)
      .setThumbnail("https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/bug.png")
      .setFooter(`Bug détecté par ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
      channel.send(embed).then(() => message.channel.send("✅ Bug rapporté avec succès!")).catch(() => message.channel.send("❌ Une erreur s'est produite!"))
}

module.exports.help = {
    name: "bug-report",
    alias: "br",
    description: "Rapporte un bug du bot.",
    usage: `bug-report [bug]`,
    example: "bug-report La commande color ne marche pas",
    category: "utilité",
    cooldown: 20
  }