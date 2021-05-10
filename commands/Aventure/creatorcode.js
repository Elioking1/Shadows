const config = require("../../config.json")
const db = require("quick.db")
const { adventureLogs } = require("../../systems/logs")
 
module.exports.run = async (bot, message, args) => {
    let prefix = await db.get(`Prefix_${message.guild.id}`)
    if(prefix == null) prefix = config.default_prefix
    if(!args[0]) return message.channel.send(db.get(`creatorcode_${message.author.id}`) ? `Vous avez mis comme code créateur: **${db.get(`creatorcode_${message.author.id}`)}**` : `Vous n'avez pas encore soutenu un utilisateur possédant un code créateur! Pour voir la liste des codes créateurs disponibles, faites \`${prefix}creatorcodelist\` !`)
    const code = config.creatorcodelist.find(x => x.name == args[0])
    if(!code) return message.channel.send(`Le code créateur **${args[0]}** n'existe pas!`)
    if(args[0] === db.get(`creatorcode_${message.author.id}`)) return message.channel.send("Vous avez déjà mis ce code créateur!")
    db.set(`creatorcode_${message.author.id}`, args[0])
    message.channel.send(`Vous soutenez désormais **${bot.users.cache.get(code.ownerID).tag}** en utilisant son code créateur: **${code.name}** !`)
    adventureLogs(bot, `\`[CREATORCODE]\`: ${message.author.tag} vient de soutenir **${bot.users.cache.get(code.ownerID).tag}** en utilisant son code créateur: **${code.name}** !`)
}

module.exports.help = {
    name: "creatorcode",
    alias: "crc",
    description: "Soutien un utilisateur en mettant son code créateur parmi la liste.",
    usage: `creatorcode <code créateur/reset>`,
    category: "aventure",
    cooldown: 10
}