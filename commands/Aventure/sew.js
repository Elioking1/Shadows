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
        .setTitle(`${adventure.sewingmachine} Atelier de couture ${adventure.sewingmachine}`)
        .setDescription(`Bienvenue dans mon atelier de couture!\nIci vous pouvez construire des vêtements.\nVoici les vêtements et les prérequis pour les coudre!\n**Rappel:** Avoir une machine à coudre et des ciseaux dans son équipement est obligatoire!!`)
        .addField(`${adventure.coat} Manteau`, `Peau d'animal: 2 ${adventure.peau}\nTissu: 3 ${adventure.tissu}\nFil: 3 ${adventure.fil}\nID: 10`, true)
        .addField(`${adventure.tshirt} T-Shirt`, `Tissu: 2 ${adventure.tissu}\nFil: 2 ${adventure.fil}\nID: 11`, true)
        .addField(`${adventure.jeans} Pantalon`, `Tissu: 3 ${adventure.tissu}\nFil: 2 ${adventure.fil}\nID: 12`, true)
        .addField(`${adventure.short} Short`, `Tissu: 2 ${adventure.tissu}\nFil: 2 ${adventure.fil}\nID: 13`, true)
        .addField(`${adventure.dress} Robe`, `Tissu: 4 ${adventure.tissu}\nFil: 5 ${adventure.fil}\nID: 14`, true)
        .addField(`${adventure.kimono} Kimono`, `Peau d'animal: 1 ${adventure.peau}\nTissu: 3 ${adventure.tissu}\nID: 15`, true)
        .addField(`${adventure.socks} Chaussettes`, `Tissu: 1 ${adventure.tissu}\nCoton: 2 ${adventure.coton}\nID: 16`, true)
        .addField(`${adventure.coat} Écharpe`, `Tissu: 2 ${adventure.tissu}\nCoton: 4 ${adventure.coton}\nID: 17`, true)
        .setFooter(`Pour construire un équipement, faites ${prefix}sew [id du vêtement]`)
        message.channel.send(embed)
    } else {
        let ids = [
            `10`,
            `11`,
            `12`,
            `13`,
            `14`,
            `15`,
            `16`,
            `17`
        ]
        if(!ids.includes(args[0])) return message.channel.send(`Veuillez mettre un ID valide!`)
        if(!db.get(`scissors_${message.author.id}`)) return message.channel.send(`Vous avez besoin des ciseaux pour coudre des vêtements!\nAller en acheter un!`)
        if(!db.get(`sewingmachine_${message.author.id}`)) return message.channel.send(`Vous avez besoin d'une machine à coudre pour coudre des vêtements!\nAller en construire une!`)

        if(args[0] == 10) {
            if(db.get(`peau_${message.author.id}`) < 2) return message.channel.send(`**${message.author.username},** il vous manque **${2 - db.get(`peau_${message.author.id}`)}** ${adventure.peau} pour pouvoir coudre le manteau!`)
            if(db.get(`tissu_${message.author.id}`) < 3) return message.channel.send(`**${message.author.username},** il vous manque **${3 - db.get(`tissu_${message.author.id}`)}** ${adventure.tissu} pour pouvoir coudre le manteau!`)
            if(db.get(`fil_${message.author.id}`) < 3) return message.channel.send(`**${message.author.username},** il vous manque **${3 - db.get(`fil_${message.author.id}`)}** ${adventure.fil} pour pouvoir coudre le manteau!`)
            let msg = await message.channel.send(`En train de coudre...`)
            try{
                db.subtract(`peau_${message.author.id}`, 2)
                db.subtract(`tissu_${message.author.id}`, 3)
                db.subtract(`fil_${message.author.id}`, 3)
                db.add(`coat_${message.author.id}`, 1)
                msg.delete()
                message.channel.send(`Félicitation, vous venez de coudre 1 manteau ${adventure.coat}!`)
                adventureLogs(bot, `\`[SEW]\`: ${message.author.tag} vient de coudre 1 manteau ${adventure.coat}`)
            }catch{
                msg.delete()
                message.channel.send(`Une erreur s'est produite!`)
            }
        }
        else if(args[0] == 11) {
            if(db.get(`tissu_${message.author.id}`) < 2) return message.channel.send(`**${message.author.username},** il vous manque **${2 - db.get(`tissu_${message.author.id}`)}** ${adventure.tissu} pour pouvoir coudre le t-shirt!`)
            if(db.get(`fil_${message.author.id}`) < 2) return message.channel.send(`**${message.author.username},** il vous manque **${2 - db.get(`fil_${message.author.id}`)}** ${adventure.fil} pour pouvoir coudre le t-shirt!`)
            let msg = await message.channel.send(`En train de coudre...`)
            try{
                db.subtract(`tissu_${message.author.id}`, 2)
                db.subtract(`fil_${message.author.id}`, 2)
                db.add(`shirt_${message.author.id}`, 1)
                msg.delete()
                message.channel.send(`Félicitation, vous venez de coudre 1 t-shirt ${adventure.tshirt}!`)
                adventureLogs(bot, `\`[SEW]\`: ${message.author.tag} vient de coudre 1 t-shirt ${adventure.tshirt}`)
            }catch{
                msg.delete()
                message.channel.send(`Une erreur s'est produite!`)
            }
        }
        else if(args[0] == 12) {
            if(db.get(`tissu_${message.author.id}`) < 3) return message.channel.send(`**${message.author.username},** il vous manque **${3 - db.get(`tissu_${message.author.id}`)}** ${adventure.tissu} pour pouvoir coudre le pantalon!`)
            if(db.get(`fil_${message.author.id}`) < 2) return message.channel.send(`**${message.author.username},** il vous manque **${2 - db.get(`fil_${message.author.id}`)}** ${adventure.fil} pour pouvoir coudre le pantalon!`)
            let msg = await message.channel.send(`En train de coudre...`)
            try{
                db.subtract(`tissu_${message.author.id}`, 3)
                db.subtract(`fil_${message.author.id}`, 2)
                db.add(`jeans_${message.author.id}`, 1)
                msg.delete()
                message.channel.send(`Félicitation, vous venez de coudre 1 pantalon ${adventure.jeans}!`)
                adventureLogs(bot, `\`[SEW]\`: ${message.author.tag} vient de coudre 1 pantalon ${adventure.jeans}`)
            }catch{
                msg.delete()
                message.channel.send(`Une erreur s'est produite!`)
            }
        }
        else if(args[0] == 13) {
            if(db.get(`tissu_${message.author.id}`) < 2) return message.channel.send(`**${message.author.username},** il vous manque **${2 - db.get(`tissu_${message.author.id}`)}** ${adventure.tissu} pour pouvoir coudre le short!`)
            if(db.get(`fil_${message.author.id}`) < 2) return message.channel.send(`**${message.author.username},** il vous manque **${2 - db.get(`fil_${message.author.id}`)}** ${adventure.fil} pour pouvoir coudre le short!`)
            let msg = await message.channel.send(`En train de coudre...`)
            try{
                db.subtract(`tissu_${message.author.id}`, 2)
                db.subtract(`fil_${message.author.id}`, 2)
                db.add(`short_${message.author.id}`, 1)
                msg.delete()
                message.channel.send(`Félicitation, vous venez de coudre 1 short ${adventure.short}!`)
                adventureLogs(bot, `\`[SEW]\`: ${message.author.tag} vient de coudre 1 short ${adventure.short}`)
            }catch{
                msg.delete()
                message.channel.send(`Une erreur s'est produite!`)
            }
        }
        else if(args[0] == 14) {
            if(db.get(`tissu_${message.author.id}`) < 4) return message.channel.send(`**${message.author.username},** il vous manque **${4 - db.get(`tissu_${message.author.id}`)}** ${adventure.tissu} pour pouvoir coudre la robe!`)
            if(db.get(`fil_${message.author.id}`) < 5) return message.channel.send(`**${message.author.username},** il vous manque **${5 - db.get(`fil_${message.author.id}`)}** ${adventure.fil} pour pouvoir coudre la robe!`)
            let msg = await message.channel.send(`En train de coudre...`)
            try{
                db.subtract(`tissu_${message.author.id}`, 4)
                db.subtract(`fil_${message.author.id}`, 5)
                db.add(`dress_${message.author.id}`, 1)
                msg.delete()
                message.channel.send(`Félicitation, vous venez de coudre 1 robe ${adventure.dress}!`)
                adventureLogs(bot, `\`[SEW]\`: ${message.author.tag} vient de coudre 1 robe ${adventure.dress}`)
            }catch{
                msg.delete()
                message.channel.send(`Une erreur s'est produite!`)
            }
        }
        else if(args[0] == 15) {
            if(db.get(`peau_${message.author.id}`) < 1) return message.channel.send(`**${message.author.username},** il vous manque **${1 - db.get(`peau_${message.author.id}`)}** ${adventure.peau} pour pouvoir coudre le kimono!`)
            if(db.get(`tissu_${message.author.id}`) < 3) return message.channel.send(`**${message.author.username},** il vous manque **${3 - db.get(`tissu_${message.author.id}`)}** ${adventure.tissu} pour pouvoir coudre le kimono!`)
            let msg = await message.channel.send(`En train de coudre...`)
            try{
                db.subtract(`tissu_${message.author.id}`, 3)
                db.subtract(`peau_${message.author.id}`, 1)
                db.add(`kimono_${message.author.id}`, 1)
                msg.delete()
                message.channel.send(`Félicitation, vous venez de coudre 1 kimono ${adventure.kimono}!`)
                adventureLogs(bot, `\`[SEW]\`: ${message.author.tag} vient de coudre 1 kimono ${adventure.kimono}`)
            }catch{
                msg.delete()
                message.channel.send(`Une erreur s'est produite!`)
            }
        }
        else if(args[0] == 16) {
            if(db.get(`tissu_${message.author.id}`) < 1) return message.channel.send(`**${message.author.username},** il vous manque **${1 - db.get(`tissu_${message.author.id}`)}** ${adventure.tissu} pour pouvoir coudre les chaussettes!`)
            if(db.get(`coton_${message.author.id}`) < 2) return message.channel.send(`**${message.author.username},** il vous manque **${2 - db.get(`coton_${message.author.id}`)}** ${adventure.coton} pour pouvoir coudre les chaussettes!`)
            let msg = await message.channel.send(`En train de coudre...`)
            try{
                db.subtract(`tissu_${message.author.id}`, 1)
                db.subtract(`coton_${message.author.id}`, 2)
                db.add(`socks_${message.author.id}`, 1)
                msg.delete()
                message.channel.send(`Félicitation, vous venez de coudre 1 paire de chaussettes ${adventure.socks}!`)
                adventureLogs(bot, `\`[SEW]\`: ${message.author.tag} vient de coudre 1 paire de chaussettes ${adventure.socks}`)
            }catch{
                msg.delete()
                message.channel.send(`Une erreur s'est produite!`)
            }
        }
        else if(args[0] == 17) {
            if(db.get(`tissu_${message.author.id}`) < 2) return message.channel.send(`**${message.author.username},** il vous manque **${2 - db.get(`tissu_${message.author.id}`)}** ${adventure.tissu} pour pouvoir coudre l'écharpe!`)
            if(db.get(`coton_${message.author.id}`) < 4) return message.channel.send(`**${message.author.username},** il vous manque **${4 - db.get(`coton_${message.author.id}`)}** ${adventure.coton} pour pouvoir coudre l'écharpe!`)
            let msg = await message.channel.send(`En train de coudre...`)
            try{
                db.subtract(`tissu_${message.author.id}`, 2)
                db.subtract(`coton_${message.author.id}`, 4)
                db.add(`scarf_${message.author.id}`, 1)
                msg.delete()
                message.channel.send(`Félicitation, vous venez de coudre 1 écharpe ${adventure.scarf}!`)
                adventureLogs(bot, `\`[SEW]\`: ${message.author.tag} vient de coudre 1 écharpe ${adventure.scarf}`)
            }catch{
                msg.delete()
                message.channel.send(`Une erreur s'est produite!`)
            }
        }
    }
}

module.exports.help = {
    name: `sew`,
    description: `Voit l'atelier ou permet de coudre un vêtement.`,
    usage: `sew <id du vêtement>`,
    category: "aventure",
    cooldown: 15
}