module.exports.run = async (bot, message, args) => {
    function getUptime(bot) {
        let timestamp = bot.uptime
        var date = new Date(timestamp);
        var hours = date.getHours();
        var days = date.getDay()
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        return `${days}j ${hours}h ${minutes}min ${seconds}sec`
      }
    message.channel.send(`Mon uptime est de: ${getUptime(bot)}`)
}

module.exports.help = {
    name: "uptime",
    description: "Affiche l'uptime du bot.",
    usage: `uptime`,
    category: "informations",
    cooldown: 5
}