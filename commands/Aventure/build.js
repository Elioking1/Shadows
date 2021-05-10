const Discord = require(`discord.js`)
const config = require(`../../config.json`)
const adventure = require(`../../database/adventure.json`)
const db = require(`quick.db`)
const { adventureLogs } = require("../../systems/logs")
 
module.exports.run = async (bot, message, args) => {
    let prefix = await db.get(`Prefix_${message.guild.id}`)
    if(prefix == null) prefix = config.default_prefix
    if(!args.length) {
        const embed = new Discord.MessageEmbed()
        .setTitle(`🛠️Atelier de construction🛠️`)
        .setDescription(`Bienvenue dans mon atelier de construction!\nIci vous pouvez construire les équipements dont vous ne disposez pas en ce moment!\nVoici les équipements et les prérequis pour la construction!\n**Rappel:** Avoir un marteau dans son équipement est obligatoire! Si vous en avez pas un, aller en acheter un!`)
        .addField(`${adventure.jackhammer} Marteau piqueur`, `Pièces: 13000 ${adventure.coins}\nFer: 50 ${adventure.iron}\n Boulon et vis: 30 ${adventure.boulonetvis}\nÉnergie: 50 ${adventure.energy}\nID: 1000`, true)
        .addField(`${adventure.sewingmachine} Machine à coudre`, `Pièces: 22000 ${adventure.coins}\nFer: 60 ${adventure.iron}\n Boulon et vis: 40 ${adventure.boulonetvis}\nÉnergie: 70 ${adventure.energy}\nID: 1100`, true)
        .setFooter(`Pour construire un équipement, faites ${prefix}build [id de l'équipement]`)
        message.channel.send(embed)
    } else {
        let ids = [
            `1000`,
            `1100`
        ]
        if(!ids.includes(args[0])) return message.channel.send(`Veuillez mettre un ID valide!`)
        if(!db.get(`hammer_${message.author.id}`)) return message.channel.send(`Vous avez besoin d'un marteau pour construire un équipement!\nAller en acheter un!`)
        if(args[0] == 1000) {
            if(db.get(`jackhammer_${message.author.id}`)) return message.channel.send(`Vous possédez déjà un marteau piqueur!`)
            if(db.get(`coins_${message.author.id}`) < 13000) return message.channel.send(`**${message.author.username},** il vous manque **${13000 - db.get(`coins_${message.author.id}`)}** ${adventure.coins} pour pouvoir construire le marteau piqueur!`)
            if(db.get(`iron_${message.author.id}`) < 50) return message.channel.send(`**${message.author.username},** il vous manque **${50 - db.get(`iron_${message.author.id}`)}** ${adventure.iron} pour pouvoir construire le marteau piqueur!`)
            if(db.get(`boulonvis_${message.author.id}`) < 30) return message.channel.send(`**${message.author.username},** il vous manque **${30 - db.get(`boulonvis_${message.author.id}`)}** ${adventure.boulonetvis} pour pouvoir construire le marteau piqueur!`)
            if(db.get(`energy_${message.author.id}`) < 50) return message.channel.send(`**${message.author.username},** il vous manque **${50 - db.get(`energy_${message.author.id}`)}** ${adventure.energy} pour pouvoir construire le marteau piqueur!`)
            let msg = await message.channel.send(`Construction en cours...`)
            try{
                db.subtract(`coins_${message.author.id}`, 13000)
                db.subtract(`iron_${message.author.id}`, 50)
                db.subtract(`boulonvis_${message.author.id}`, 30)
                db.subtract(`energy_${message.author.id}`, 50)
                db.set(`jackhammer_${message.author.id}`, true)
                msg.delete()
                message.channel.send(`Félicitation, vous avez bien construit votre marteau piqueur!`)
                adventureLogs(bot, `\`[CONSTRUCTION]\`: ${message.author.tag} vient de construire son marteau piqueur ${adventure.jackhammer} !`)
            }catch{
                msg.delete()
                message.channel.send(`Une erreur s'est produite!`)
            }
        }
        else if(args[0] == 1100) {
                        if(db.get(`sewingmachine_${message.author.id}`)) return message.channel.send(`Vous possédez déjà une machine à coudre!`)
            if(db.get(`coins_${message.author.id}`) < 22000) return message.channel.send(`**${message.author.username},** il vous manque **${22000 - db.get(`coins_${message.author.id}`)}** ${adventure.coins} pour pouvoir construire la machine à coudre!`)
            if(db.get(`iron_${message.author.id}`) < 60) return message.channel.send(`**${message.author.username},** il vous manque **${60 - db.get(`iron_${message.author.id}`)}** ${adventure.iron} pour pouvoir construire la machine à coudre!`)
            if(db.get(`boulonvis_${message.author.id}`) < 40) return message.channel.send(`**${message.author.username},** il vous manque **${40 - db.get(`boulonvis_${message.author.id}`)}** ${adventure.boulonetvis} pour pouvoir construire la machine à coudre!`)
            if(db.get(`energy_${message.author.id}`) < 70) return message.channel.send(`**${message.author.username},** il vous manque **${70 - db.get(`energy_${message.author.id}`)}** ${adventure.energy} pour pouvoir construire la machine à coudre!`)
            let msg = await message.channel.send(`Construction en cours...`)
            try{
                db.subtract(`coins_${message.author.id}`, 22000)
                db.subtract(`iron_${message.author.id}`, 60)
                db.subtract(`boulonvis_${message.author.id}`, 40)
                db.subtract(`energy_${message.author.id}`, 70)
                db.set(`sewingmachine_${message.author.id}`, true)
                msg.delete()
                message.channel.send(`Félicitation, vous avez bien construit votre machine à coudre!`)
                adventureLogs(bot, `\`[CONSTRUCTION]\`: ${message.author.tag} vient de construire sa machine à coudre ${adventure.sewingmachine} !`)
            }catch{
                msg.delete()
                message.channel.send(`Une erreur s'est produite!`)
            }
        }
    }
}

module.exports.help = {
    name: `build`,
    description: `Voit l'atelier ou construit un équipement.`,
    usage: `build <id de l'équipement>`,
    category: "aventure",
    cooldown: 15
}