const Discord = require("discord.js")
const canvas = require("discord-canvas")
const db = require("quick.db")

module.exports = async (bot, guild, user) => {
    let banchannel = guild.channels.cache.get(db.get(`banchannel_${guild.id}`))
    if(banchannel) {
      const banCanvas = new canvas.Goodbye();
  
      let image = await banCanvas
      .setUsername(user.username)
      .setDiscriminator(user.discriminator)
      .setMemberCount(guild.memberCount)
      .setGuildName(guild.name)
      .setAvatar(user.displayAvatarURL({ format: "png" }))
      .setText("title", "Ban")
      .setText("message", "ban de {server}")
      .setText("member-count", "{count}e membre")
      .setColor("border", "#000000")
      .setColor("username-box", "#ff0000")
      .setColor("discriminator-box", "#ff0000")
      .setColor("message-box", "#ff0000")
      .setColor("title", "#ff0000")
      .setColor("avatar", "#ff0000")
      .setBackground("https://img.phonandroid.com/2016/11/fond-ecran-noir.jpg").toAttachment();
   
   let attachment = new Discord.MessageAttachment(image.toBuffer(), "ban-image.png");
   
   banchannel.send(attachment);
    }
}