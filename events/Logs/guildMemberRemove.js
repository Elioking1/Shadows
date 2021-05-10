const Discord = require("discord.js")
const canvas = require("discord-canvas")
const db = require("quick.db")

module.exports = async (bot, member) => {
    let leavechannel = member.guild.channels.cache.get(db.get(`leavechannel_${member.guild.id}`))
    if(leavechannel) {
      const goodbyeCanvas = new canvas.Goodbye();
  
      let image = await goodbyeCanvas
      .setUsername(member.user.username)
      .setDiscriminator(member.user.discriminator)
      .setMemberCount(member.guild.memberCount)
      .setGuildName(member.guild.name)
      .setAvatar(member.user.displayAvatarURL({ format: "png" }))
      .setText("title", "Adieu")
      .setText("message", "quitte {server}")
      .setText("member-count", "{count}e membre")
      .setColor("border", "#000000")
      .setColor("username-box", "#00ff14")
      .setColor("discriminator-box", "#00ff14")
      .setColor("message-box", "#00ff14")
      .setColor("title", "#00ff14")
      .setColor("avatar", "#00ff14")
      .setBackground("https://img.phonandroid.com/2016/11/fond-ecran-noir.jpg").toAttachment();
   
   let attachment = new Discord.MessageAttachment(image.toBuffer(), "leave-image.png");
   
   leavechannel.send(attachment);
    } 
}