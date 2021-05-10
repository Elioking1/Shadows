const db = require('quick.db')
const config = require('../../config.json')

module.exports.run = async (bot, message, args) => {
    let prefix = await db.get(`Prefix_${message.guild.id}`)
    if(prefix === null) prefix = config.default_prefix
    if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    let nprefix = args[0]
    if(!nprefix) return message.channel.send(`Le préfix actuel du bot est: \`\`${prefix}\`\``)
    if(args[1]) return message.channel.send("Vous ne pouvez pas mettre 2 préfix ou plus!")
        if(nprefix == prefix) return message.channel.send("Ce prefix est déjà mis en configuration!")
    db.set(`Prefix_${message.guild.id}`, nprefix)
    message.channel.send(`Le nouveau préfix du bot sera: **${nprefix}**`)
}

module.exports.help = {
    name: "prefix",
    description: "Configure le préfix du bot.",
    usage: `prefix <prefix>`,
    category: "configuration",
    cooldown: 15
}