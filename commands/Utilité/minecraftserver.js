const Discord = require("discord.js")
const moment = require("moment"); 
const ping = require("minecraft-server-util")

module.exports.run = async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`Veuillez mettre l'IP d'un serveur minecraft!`) 
    let msg = await message.channel.send("Recherche en cours...")
        ping(args[0], 25565).then(data => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Serveur Minecraft")
            .setDescription(`\`\`\`IP: ${data.host}\nVersion: ${data.version}\nJoueurs connectés: ${data.onlinePlayers} / ${data.maxPlayers}\nDernière mise à jour: ${moment(data.last_updated).format("DD/MM/YYYY || hh:mm:ss")}\`\`\``)
            msg.delete()
            message.channel.send(embed)
        }).catch(error => {
                msg.delete()
    console.log(`Erreur dans la commande mcserver :\n`, error); 
        return message.channel.send(`L'IP du serveur minecraft \`${args[0]}\` n'existe pas!`) 
        })
} 

module.exports.help = {
    name: "minecraftserver",
    alias: "mcserver",
    description: "Recherche les informations d'un serveur minecraft.",
    usage: `minecraftserver [IP d'un serveur minecraft]`,
    example: "minecraftserver minescape.me",
    category: "utilité",
    cooldown: 10
  }