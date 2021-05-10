const db = require(`quick.db`)
const adventure = require(`../../database/adventure.json`)
const { adventureLogs } = require("../../systems/logs")
const collects = [
    {
        name: `${adventure.wood}`,
        variable: `wood`,
        number: Math.floor(Math.random() * 2 + 1)
    },
    {
        name: `${adventure.bronze}`,
        variable: `bronze`,
        number: 1
    },
    {
        name: `${adventure.silver}`,
        variable: `silver`,
        number: 1
    },
    {
        name: `${adventure.iron}`,
        variable: `iron`,
        number: Math.floor(Math.random() * 2 + 1)
    },
    {
        name: `${adventure.stone}`,
        variable: `stone`,
        number: Math.floor(Math.random() * 2 + 1)
    },
    {
        name: `${adventure.boulonetvis}`,
        variable: `boulonvis`,
        number: Math.floor(Math.random() * 2 + 1)
    }
]
 
module.exports.run = async (bot, message, args) => {
    let randomcollect = collects[Math.floor(Math.random() * collects.length)]
    db.add(`${randomcollect.variable}_${message.author.id}`, randomcollect.number)

    message.channel.send(`**${message.author.username},** vous avez ramassé ${randomcollect.number} ${randomcollect.name}!`)
    adventureLogs(bot, `\`[COLLECT]\`: ${message.author.tag} vient de récolter ${randomcollect.number} ${randomcollect.name} !`)
}

module.exports.help = {
    name: `collect`,
    description: `Récolte une ressource en ramassant par terre.`,
    usage: `collect`,
    category: "aventure",
    cooldown: 7200
}