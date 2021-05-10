const Discord = require("discord.js")
const config = require("../../config.json")
const db = require("quick.db")
const adventure = require("../../database/adventure.json")
 
module.exports.run = async (bot, message, args) => {
    let prefix = await db.get(`Prefix_${message.guild.id}`)
    if(prefix === null) prefix = config.default_prefix
    let msg = ""
    if(db.get(`creatorcode_${message.author.id}`)) msg = `Vous avez mis comme code créateur: **${db.get(`creatorcode_${message.author.id}`)}**`
    else msg = `Vous n'avez pas encore soutenu un utilisateur possédant un code créateur! Pour voir la liste des codes créateurs disponibles, faites \`${prefix}creatorcodelist\` !`
        const embed = new Discord.MessageEmbed()
        .setTitle("🛒Boutique🛒")
        .setDescription(`Bienvenue dans ma boutique!\nIci vous pouvez acheter ce que la boutique vous offre.\nVoici les produits disponibles dans la boutique!`)
        .addField(`${adventure.coins} Pièces`, `ID: 100\n1) 1 ${adventure.gems} = 10 ${adventure.coins}\n2) 4 ${adventure.gems} = 45 ${adventure.coins}\n3) 10 ${adventure.gems} = 127 ${adventure.coins}\n4) 20 ${adventure.gems} = 286 ${adventure.coins}\n5) 50 ${adventure.gems} = 805 ${adventure.coins}\n6) 100 ${adventure.gems} = 1812 ${adventure.coins}\n7) 200 ${adventure.gems} = 4077 ${adventure.coins}`, true)
        .addField("🛡️ Équipement", `ID: 110\n1) ${adventure.fishingpole} Canne à pêche = 2500 ${adventure.coins}\n2) ${adventure.axe} Hache = 3000 ${adventure.coins}\n3) ${adventure.pick} Pioche = 4500 ${adventure.coins}\n4) ${adventure.hammer} Marteau = 5000 ${adventure.coins}\n5) ${adventure.battery} Batterie = 8000 ${adventure.coins}\n6) ${adventure.shovel} Pelle = 8500 ${adventure.coins}\n7) ${adventure.pistol} Pistolet = 13000 ${adventure.coins}\n8) ${adventure.knife} Épée = 17000 ${adventure.coins}`, true)
        .addField("✂️ Coudre", `ID: 120\n1) ${adventure.fil} Fil = 250 ${adventure.coins}\n2) ${adventure.tissu} Tissu = 500 ${adventure.coins}\n3) ${adventure.coton} Coton = 600 ${adventure.coins}\n4) ${adventure.cuir} Cuir = 1000 ${adventure.coins}\n5) ${adventure.scissors} Ciseaux = 7000 ${adventure.coins}`, true)
        .addField('\u200B', msg)
        .setFooter(`Pour acheter quelquechose de la boutique, faites ${prefix}buy [id de la catégorie] [nombre de l'offre]\nPar exemple ${prefix}buy 100 2`)
        message.channel.send(embed)
}

module.exports.help = {
    name: "shop",
    description: "Affiche le shop.",
    usage: `shop`,
    category: "aventure",
    cooldown: 10
}