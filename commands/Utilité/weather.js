const weather = require('weather-js'); 
const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
            if(!args.length) {
                return message.channel.send("Veuillez indiquer un pays ou une ville!")
              }
              weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
                try {
                 
                let embed = new Discord.MessageEmbed()
                .setTitle(`Météo - ${result[0].location.name}`)
                .setColor("#ff2050")
                .setDescription("Les unités de température peuvent différer parfois")
                .addField("Emplacement", `${result[0].location.name}`)
                .addField("Température", `${result[0].current.temperature}°C`, true)
                .addField("Temps Actuel", result[0].current.skytext, true)
                .addField("Humidité", `${result[0].current.humidity}%`, true)
                .addField("Vitesse du vent", result[0].current.windspeed, true)//What about image
                .addField("Temps d'observation", result[0].current.observationtime, true)
                .addField("Déplacement du vent", result[0].current.winddisplay, true)
                .setThumbnail(result[0].current.imageUrl);
                   message.channel.send(embed)
                } catch(err) {
                  return message.channel.send("Impossible d'obtenir les données de l'emplacement donné!")
                }
                });   
            
    }

module.exports.help = {
    name: "weather",
    description: "Affiche la météo dans un pays ou une ville.",
    usage: `weather [ville/pays]`,
    category: "utilité",
    cooldown: 10
}