const config = require("../config.json")

const adventureLogs = async (bot, message) => {
    const channel = bot.channels.cache.get(config.channels.adventurelogs)
    channel.send(message)
}

module.exports = {
    adventureLogs
}