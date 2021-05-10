const Discord = require ("discord.js");
const db = require("quick.db");
const config = require("../../config.json");
 
module.exports.run = async (bot, message, args) => {
    let alstat = db.get(`antiliens_${message.guild.id}`)
    let abstat = db.get(`antibots_${message.guild.id}`)
    let al = ""
    if(!alstat) al = "❌"
    else if(alstat == "off") al = "❌"
    else if(alstat == "on") al = "✅"

    let ab = ""
    if(!abstat) ab = "❌"
    else if(abstat == "off") ab = "❌"
    else if(abstat == "on") ab = "✅"
    const embed = new Discord.MessageEmbed()
    .setTitle(`⚙️ Menu de configuration du serveur **${message.guild.name}**`)
    .addField("🔧 <:flechebleu:737608616110063629> Bot", `\`\`\`Préfix: ${db.get(`Prefix_${message.guild.id}`) === null ? config.default_prefix : db.get(`Prefix_${message.guild.id}`)}\`\`\``)
    .addField("<:autorole:737605285778161674> <:flecheorange:737607039412338810> Système", `\`\`\`Anti Bot: ${ab}\nAnti Lien: ${al}\nAutorole: ${message.guild.roles.cache.get(db.get(`AutoRole_${message.guild.id}`)) === undefined ? "❌" : message.guild.roles.cache.get(db.get(`AutoRole_${message.guild.id}`)).name}\`\`\``)
    .addField("<:logs:737605449003827280> Salons", `\`\`\`Logs: ${message.guild.channels.cache.get(db.get(`Logs_${message.guild.id}`)) === undefined ? "❌" : message.guild.channels.cache.get(db.get(`Logs_${message.guild.id}`)).name}\nSalon d'adieu: ${message.guild.channels.cache.get(db.get(`leavechannel_${message.guild.id}`)) === undefined ? "❌" : message.guild.channels.cache.get(db.get(`leavechannel_${message.guild.id}`)).name}\nSalon de ban: ${message.guild.channels.cache.get(db.get(`banchannel_${message.guild.id}`)) === undefined ? "❌" : message.guild.channels.cache.get(db.get(`banchannel_${message.guild.id}`)).name}\nSalon de bienvenue: ${message.guild.channels.cache.get(db.get(`welcomechannel_${message.guild.id}`)) === undefined ? "❌" : message.guild.channels.cache.get(db.get(`welcomechannel_${message.guild.id}`)).name}\nSalon des rapports: ${message.guild.channels.cache.get(db.get(`reportChannel_${message.guild.id}`)) === undefined ? "❌" : message.guild.channels.cache.get(db.get(`reportChannel_${message.guild.id}`)).name}\nSalon des suggestions: ${message.guild.channels.cache.get(db.get(`SuggestChannel_${message.guild.id}`)) === undefined ? "❌" : message.guild.channels.cache.get(db.get(`SuggestChannel_${message.guild.id}`)).name}\`\`\``)
    .setImage("https://cdn.discordapp.com/attachments/695855928196464663/728673749800321034/Menu_de_configuration.png")
    message.channel.send(embed)
}

module.exports.help = {
    name: "menu-config",
    alias: "menu-configuration",
    alias2: "configuration",
    alias3: "config",
    description: "Affiche le menu de configuration du serveur.",
    usage: `menu-config`,
    category: "configuration",
    cooldown: 3
}