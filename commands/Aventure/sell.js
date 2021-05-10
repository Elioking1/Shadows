const adventure = require("../../database/adventure.json")
const db = require("quick.db")
const { adventureLogs } = require("../../systems/logs")
 
module.exports.run = async (bot, message, args) => {
    let ressources = [
        {
            name: "bois",
            symbol: adventure.wood,
            price: 1,
            check: `wood_${message.author.id}`
        },
        {
            name: "fer",
            symbol: adventure.iron,
            price: 2,
            check: `iron_${message.author.id}`
        },
        {
            name: "pierre",
            symbol: adventure.stone,
            price: 2,
            check: `stone_${message.author.id}`
        },
        {
            name: "corde",
            symbol: adventure.rope,
            price: 5,
            check: `rope_${message.author.id}`
        },
        {
            name: "peau",
            symbol: adventure.peau,
            price: 5,
            check: `peau_${message.author.id}`
        },
        {
            name: "tissu",
            symbol: adventure.tissu,
            price: 9,
            check: `tissu_${message.author.id}`
        },
        {
            name: "coton",
            symbol: adventure.coton,
            price: 10,
            check: `coton_${message.author.id}`
        },
        {
            name: "fil",
            symbol: adventure.fil,
            price: 15,
            check: `fil_${message.author.id}`
        },
        {
            name: "bronze",
            symbol: adventure.bronze,
            price: 2,
            check: `bronze_${message.author.id}`
        },
        {
            name: "argent",
            symbol: adventure.silver,
            price: 7,
            check: `silver_${message.author.id}`
        },
        {
            name: "or",
            symbol: adventure.gold,
            price: 17,
            check: `gold_${message.author.id}`
        },
        {
            name: "sardine",
            symbol: adventure.sardine,
            price: 2,
            check: `sardine_${message.author.id}`
        },
        {
            name: "fugu",
            symbol: adventure,
            price: 7,
            check: `fugu_${message.author.id}`
        },
        {
            name: "poissonclown",
            symbol: adventure.clownfish,
            price: 12,
            check: `clownfish_${message.author.id}`
        },
        {
            name: "poissonpapillon",
            symbol: adventure.fishpapillon,
            price: 26,
            check: `fishpapillon_${message.author.id}`
        },
        {
            name: "requin",
            symbol: adventure.shark,
            price: 37,
            check: `shark_${message.author.id}`
        },
        {
            name: "baleine",
            symbol: adventure.whale,
            price: 53,
            check: `whale_${message.author.id}`
        },
        {
            name: "cristalvert",
            symbol: adventure.greencristal,
            price: 39,
            check: `cristalvert_${message.author.id}`
        },
        {
            name: "cristalrouge",
            symbol: adventure.redcristal,
            price: 39,
            check: `cristalrouge_${message.author.id}`
        },
        {
            name: "cristalrose",
            symbol: adventure.pinkcristal,
            price: 39,
            check: `cristalrose_${message.author.id}`
        },
        {
            name: "cristalmauve",
            symbol: adventure.purplecristal,
            price: 39,
            check: `cristalmauve_${message.author.id}`
        },
        {
            name: "cristaljaune",
            symbol: adventure.yellowcristal,
            price: 39,
            check: `cristaljaune_${message.author.id}`
        },
        {
            name: "cristalbleuclair",
            symbol: adventure.lightbluecristal,
            price: 39,
            check: `cristalbleuclair_${message.author.id}`
        },
        {
            name: "cristalbleu",
            symbol: adventure.bluecristal,
            price: 39,
            check: `cristalbleu_${message.author.id}`
        },
        {
            name: "manteau",
            symbol: adventure.coat,
            price: 20,
            check: `coat_${message.author.id}`
        },
        {
            name: "tshirt",
            symbol: adventure.tshirt,
            price: 10,
            check: `shirt_${message.author.id}`
        },
        {
            name: "pantalon",
            symbol: adventure.jeans,
            price: 15,
            check: `jeans_${message.author.id}`
        },
        {
            name: "short",
            symbol: adventure.short,
            price: 10,
            check: `short_${message.author.id}`
        },
        {
            name: "robe",
            symbol: adventure.dress,
            price: 20,
            check: `dress_${message.author.id}`
        },
        {
            name: "kimono",
            symbol: adventure.kimono,
            price: 30,
            check: `kimono_${message.author.id}`
        },
        {
            name: "chaussettes",
            symbol: adventure.socks,
            price: 5,
            check: `socks_${message.author.id}`
        },
        {
            name: "echarpe",
            symbol: adventure.scarf,
            price: 10,
            check: `scarf_${message.author.id}`
        }
    ]
    let ressource = ressources.find(r => r.name == args[0])
    if(!ressource) return message.channel.send(`Veuillez écrire la ressource à vendre en minuscule (si elle contient des espaces vous les coller)!`)
    let quantity = Math.floor(args[1]) || 1
    if(args[1]) {
        if(isNaN(args[1])) return message.channel.send("La quantité mise n'est pas un nombre!")
        if(quantity <= 0) return message.channel.send("Veuillez mettre une quantité supérieur à 0 et non décimal!")
    }
    if(db.get(check) < quantity) return message.channel.send(`**${message.author.username},** vous n'avez pas autant de ${ressource.name} sur vous afin de les vendre!`)
    let msg = await message.channel.send("Vente en cours...")
    try {
    db.add(`coins_${message.author.id}`, quantity * ressource.price)
    db.subtract(ressource.check, quantity)
    msg.delete()
    message.channel.send(`Vous venez de vendre ${quantity} ${ressource.symbol}!`)
    adventureLogs(bot, `\`[SELL]\`: ${message.author.tag} vient de vendre ${quantity} ${ressource.symbol}!`)
    } catch {
        msg.delete()
        message.channel.send("Une erreur s'est produite!")
    }
}

module.exports.help = {
    name: "sell",
    description: "Vends une ressource",
    usage: `sell [nom de la ressource] <quantité>`,
    example: "sell cristalvert 4",
    category: "aventure",
    cooldown: 8
}