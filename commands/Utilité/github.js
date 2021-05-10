const Discord = require("discord.js")
const moment = require("moment"); 
const fetch = require("node-fetch")

module.exports.run = async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`Veuillez écrire le nom d'un utilisateur à chercher sur Github!`) 
    let msg = await message.channel.send("Recherche en cours...")
    try { 
        fetch(`https://api.github.com/users/${args.join('-')}`).then(res => res.json()).then(body => { 
        if(body.message) {
            msg.delete()
            return message.channel.send(`L'utilisateur **${args.join(" ")}** n'existe pas!`); 
        }
        let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio } = body; 
        const embed = new Discord.MessageEmbed() 
        .setAuthor(`Information sur ${login}`, avatar_url, html_url) 
        .setColor(`#211F1F`) 
        .setURL(html_url)
        .setThumbnail(`${avatar_url}`) 
        .addField(`\u200B`, `\`\`\`Nom d'utilisateur: ${login}\nID: ${id}\nBio: ${bio || "❌"}\nRépertoires Publics: ${public_repos || "❌"}\nFollowers: ${followers}\nFollowing: ${following}\nLocalisation: ${location || "❌"}\nCréation du compte: ${moment.utc(created_at).format("DD/MM/YYYY || hh:mm:ss")}\`\`\``)
        msg.delete()
        message.channel.send(embed) 
    }) 
} catch (error) { 
    msg.delete()
    console.log(`[Commands] [github] Getting Error In github Command :\n`, error); 
        return message.channel.send(`Une erreur s'est produite!`) 
    } 
}

module.exports.help = {
    name: "github",
    description: "Recherche quelqu'un sur Github.",
    usage: `github [nom d'un utilisateur github]`,
    example: "github Elioking1",
    category: "utilité",
    cooldown: 15
  }