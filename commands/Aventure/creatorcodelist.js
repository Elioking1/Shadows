const config = require("../../config.json")
const db = require("quick.db")
 
module.exports.run = async (bot, message, args) => {
    let prefix = await db.get(`Prefix_${message.guild.id}`)
    if(prefix === null) prefix = config.default_prefix
    const codes = await config.creatorcodelist.map(c => `<:flecheorange:737607039412338810> ${c.name} (\`${bot.users.cache.get(c.ownerID).tag}\`)`).join(`\n`)
    message.channel.send(`Voici les différents codes créateurs disponibles et leurs propriétaires:\n\n${codes}\n\n\nPour soutenir l'un de ces utilisateurs, faites \`${prefix}creatorcode [code créateur]\` !`)
}

module.exports.help = {
    name: "creatorcodelist",
    alias: "ccl",
    description: "Affiche une liste de tous les codes créateurs disponibles.",
    usage: `creatorcodelist`,
    category: "aventure",
    cooldown: 10
}