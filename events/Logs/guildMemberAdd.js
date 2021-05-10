const Discord = require("discord.js")
const canvas = require("discord-canvas")
const db = require("quick.db")

module.exports = async (bot, member) => {
    if(db.get(`AutoRole_${member.guild.id}`)) await member.roles.add(db.get(`AutoRole_${member.guild.id}`))
    let welcomechannel = member.guild.channels.cache.get(db.get(`welcomechannel_${member.guild.id}`))
    if(welcomechannel) {
      const welcomeCanvas = new canvas.Welcome();
  
     let image = await welcomeCanvas
     .setUsername(member.user.username)
     .setDiscriminator(member.user.discriminator)
     .setMemberCount(member.guild.memberCount)
     .setGuildName(member.guild.name)
     .setAvatar(member.user.displayAvatarURL({ format: "png" }))
     .setText("title", "Bienvenue")
     .setText("message", "Bienvenue dans {server}")
     .setText("member-count", "{count}e membre")
     .setColor("border", "#000000")
     .setColor("username-box", "#FF7F00")
     .setColor("discriminator-box", "#FF7F00")
     .setColor("message-box", "#FF7F00")
     .setColor("title", "#FF7F00")
     .setColor("avatar", "#FF7F00")
     .setBackground("https://img.phonandroid.com/2016/11/fond-ecran-noir.jpg").toAttachment();
  
  let attachment = new Discord.MessageAttachment(image.toBuffer(), "welcome-image.png");
  
  welcomechannel.send(attachment);
    }
    let abstat = db.get(`antibots_${member.guild.id}`)
if(abstat) {
  if(!member.presence.user.bot) return
  await member.kick()
}
}