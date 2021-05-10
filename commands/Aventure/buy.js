const config = require("../../config.json")
const db = require("quick.db")
const adventure = require("../../database/adventure.json")
const { adventureLogs } = require("../../systems/logs")
 
module.exports.run = async (bot, message, args) => {
    let codes = config.creatorcodelist
    let creatorcode = await db.get(`creatorcode_${message.author.id}`)
    function creatorCode(item, number) {
        if(creatorcode) {
            let code = codes.find(c => c.name == creatorcode)
            return db.add(`${item}_${bot.users.cache.get(code.ownerID).id}`, Math.ceil(number * 5 / 100))
        } else {
            return
        }
    }
    let ids = [
        "100",
        "110",
        "120"
    ]
    let category = args[0]
    if(!category) return message.channel.send("Veuillez donner un ID!")
    if(!ids.includes(category)) return message.channel.send("Veuillez donner un ID valide!")
    let offre = args[1]
    if(!offre) return message.channel.send("Veuillez mettre le numéro de l'offre dans la catégorie!")
    if(category == 100) {
        let offres = ["1","2","3","4","5","6","7"]
        if(!offres.includes(offre)) return message.channel.send("Le numéro de cette offre n'est pas disponible!")
        if(offre == 1) {
            if(db.get(`gems_${message.author.id}`) < 1) return message.channel.send(`**${message.author.username},** il vous manque 1 ${adventure.gems} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`gems_${message.author.id}`, 1)
                db.add(`coins_${message.author.id}`, 10)
                creatorCode("gems", 1)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez 10 ${adventure.coins}!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter 10 ${adventure.coins} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
        else if(offre == 2) {
            if(db.get(`gems_${message.author.id}`) < 4) return message.channel.send(`**${message.author.username},** il vous manque **${4 - db.get(`gems_${message.author.id}`)}** ${adventure.gems} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`gems_${message.author.id}`, 4)
                db.add(`coins_${message.author.id}`, 45)
                creatorCode("gems", 4)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez 45 ${adventure.coins}!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter 45 ${adventure.coins} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
        else if(offre == 3) {
            if(db.get(`gems_${message.author.id}`) < 10) return message.channel.send(`**${message.author.username},** il vous manque **${10 - db.get(`gems_${message.author.id}`)}** ${adventure.gems} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`gems_${message.author.id}`, 10)
                db.add(`coins_${message.author.id}`, 127)
                creatorCode("gems", 10)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez 127 ${adventure.coins}!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter 127 ${adventure.coins} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
        else if(offre == 4) {
            if(db.get(`gems_${message.author.id}`) < 20) return message.channel.send(`**${message.author.username},** il vous manque **${20 - db.get(`gems_${message.author.id}`)}** ${adventure.gems} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`gems_${message.author.id}`, 20)
                db.add(`coins_${message.author.id}`, 286)
                creatorCode("gems", 20)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez 286 ${adventure.coins}!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter 286 ${adventure.coins} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
        else if(offre == 5) {
            if(db.get(`gems_${message.author.id}`) < 50) return message.channel.send(`**${message.author.username},** il vous manque **${50 - db.get(`gems_${message.author.id}`)}** ${adventure.gems} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`gems_${message.author.id}`, 50)
                db.add(`coins_${message.author.id}`, 805)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez 805 ${adventure.coins}!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter 805 ${adventure.coins} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
        else if(offre == 6) {
            if(db.get(`gems_${message.author.id}`) < 100) return message.channel.send(`**${message.author.username},** il vous manque **${100 - db.get(`gems_${message.author.id}`)}** ${adventure.gems} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`gems_${message.author.id}`, 100)
                db.add(`coins_${message.author.id}`, 1812)
                creatorCode("gems", 100)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez 1812 ${adventure.coins}!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter 1812 ${adventure.coins} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
        else if(offre == 7) {
            if(db.get(`gems_${message.author.id}`) < 200) return message.channel.send(`**${message.author.username},** il vous manque **${200 - db.get(`gems_${message.author.id}`)}** ${adventure.gems} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`gems_${message.author.id}`, 200)
                db.add(`coins_${message.author.id}`, 4077)
                creatorCode("gems", 200)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez 4077 ${adventure.coins}!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter 4077 ${adventure.coins} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
    }
    else if(category == 110) {
        let offres = ["1","2","3","4","5","6","7","8"]

        if(!offres.includes(offre)) return message.channel.send("Le numéro de cette offre n'est pas disponible!")
        if(offre == 1) {
            if(db.get(`fishingpole_${message.author.id}`)) return message.channel.send("Vous possédez déjà une canne à pêche!")
            if(db.get(`coins_${message.author.id}`) < 2500) return message.channel.send(`**${message.author.username},** il vous manque **${2500 - db.get(`coins_${message.author.id}`)}** ${adventure.coins} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`coins_${message.author.id}`, 2500)
                db.set(`fishingpole_${message.author.id}`, true)
                creatorCode("coins", 2500)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez une canne à pêche!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter une canne à pêche ${adventure.fishingpole} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
        else if(offre == 2) {
            if(db.get(`axe_${message.author.id}`)) return message.channel.send("Vous possédez déjà une hache!")
            if(db.get(`coins_${message.author.id}`) < 3000) return message.channel.send(`**${message.author.username},** il vous manque **${3000 - db.get(`coins_${message.author.id}`)}** ${adventure.coins} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`coins_${message.author.id}`, 3000)
                db.set(`axe_${message.author.id}`, true)
                creatorCode("coins", 3000)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez une hache!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter une hache ${adventure.axe} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
        else if(offre == 3) {
            if(db.get(`pick_${message.author.id}`)) return message.channel.send("Vous possédez déjà une pioche!")
            if(db.get(`coins_${message.author.id}`) < 4500) return message.channel.send(`**${message.author.username},** il vous manque **${4500 - db.get(`coins_${message.author.id}`)}** ${adventure.coins} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`coins_${message.author.id}`, 4500)
                db.set(`pick_${message.author.id}`, true)
                creatorCode("coins", 4500)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez une pioche!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter une pioche ${adventure.pick} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
        else if(offre == 4) {
            if(db.get(`hammer_${message.author.id}`)) return message.channel.send("Vous possédez déjà un marteau!")
            if(db.get(`coins_${message.author.id}`) < 5000) return message.channel.send(`**${message.author.username},** il vous manque **${5000 - db.get(`coins_${message.author.id}`)}** ${adventure.coins} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`coins_${message.author.id}`, 5000)
                db.set(`hammer_${message.author.id}`, true)
                creatorCode("coins", 5000)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez un marteau!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter un marteau ${adventure.hammer} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
        else if(offre == 5) {
            if(db.get(`battery_${message.author.id}`)) return message.channel.send("Vous possédez déjà une batterie!")
            if(db.get(`coins_${message.author.id}`) < 8000) return message.channel.send(`**${message.author.username},** il vous manque **${8000 - db.get(`coins_${message.author.id}`)}** ${adventure.coins} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`coins_${message.author.id}`, 8000)
                db.set(`battery_${message.author.id}`, true)
                creatorCode("coins", 8000)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez une batterie!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter une batterie ${adventure.battery} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
        else if(offre == 6) {
            if(db.get(`shovel_${message.author.id}`)) return message.channel.send("Vous possédez déjà une pelle!")
            if(db.get(`coins_${message.author.id}`) < 8500) return message.channel.send(`**${message.author.username},** il vous manque **${8500 - db.get(`coins_${message.author.id}`)}** ${adventure.coins} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`coins_${message.author.id}`, 8500)
                db.set(`shovel_${message.author.id}`, true)
                creatorCode("coins", 8500)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez une pelle!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter une pelle ${adventure.shovel} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
        else if(offre == 7) {
            if(db.get(`pistol_${message.author.id}`)) return message.channel.send("Vous possédez déjà un pistolet!")
            if(db.get(`coins_${message.author.id}`) < 13000) return message.channel.send(`**${message.author.username},** il vous manque **${13000 - db.get(`coins_${message.author.id}`)}** ${adventure.coins} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`coins_${message.author.id}`, 13000)
                db.set(`pistol_${message.author.id}`, true)
                creatorCode("coins", 13000)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez un pistolet!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter un pistolet ${adventure.pistol} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
        else if(offre == 8) {
            if(db.get(`sword_${message.author.id}`)) return message.channel.send("Vous possédez déjà une épée!")
            if(db.get(`coins_${message.author.id}`) < 17000) return message.channel.send(`**${message.author.username},** il vous manque **${17000 - db.get(`coins_${message.author.id}`)}** ${adventure.coins} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`coins_${message.author.id}`, 17000)
                db.set(`sword_${message.author.id}`, true)
                creatorCode("coins", 17000)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez une épée!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter une épée ${adventure.knife} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
    }
    else if(category == 120) {
        let offres = ["1","2","3","4","5"]

        if(!offres.includes(offre)) return message.channel.send("Le numéro de cette offre n'est pas disponible!")
        if(offre == 1) {
            if(db.get(`coins_${message.author.id}`) < 250) return message.channel.send(`**${message.author.username},** il vous manque **${250 - db.get(`coins_${message.guild.id}`)}** ${adventure.coins} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`coins_${message.author.id}`, 250)
                db.add(`fil_${message.author.id}`, 1)
                creatorCode("coins", 250)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez 1 ${adventure.fil}!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter 1 fil ${adventure.fil} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
        else if(offre == 2) {
            if(db.get(`coins_${message.author.id}`) < 500) return message.channel.send(`**${message.author.username},** il vous manque **${500 - db.get(`coins_${message.guild.id}`)}** ${adventure.coins} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`coins_${message.author.id}`, 500)
                db.add(`tissu_${message.author.id}`, 1)
                creatorCode("coins", 500)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez 1 ${adventure.tissu}!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter 1 tissu ${adventure.tissu} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
        }
        else if(offre == 3) {
            if(db.get(`coins_${message.author.id}`) < 600) return message.channel.send(`**${message.author.username},** il vous manque **${600 - db.get(`coins_${message.guild.id}`)}** ${adventure.coins} pour pouvoir acheter l'offre ${offre}!`)
            let msg = await message.channel.send("Achat en cours...")
            try{
                db.subtract(`coins_${message.author.id}`, 600)
                db.add(`coton_${message.author.id}`, 1)
                creatorCode("coins", 600)
                msg.delete()
                message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez 1 ${adventure.coton}!`)
                adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter 1 coton ${adventure.coton} !`)
            }catch{
                msg.delete()
                message.channel.send("Une erreur s'est produite!")
            }
    }
    else if(offre == 4) {
        if(db.get(`coins_${message.author.id}`) < 1000) return message.channel.send(`**${message.author.username},** il vous manque **${1000 - db.get(`coins_${message.guild.id}`)}** ${adventure.coins} pour pouvoir acheter l'offre ${offre}!`)
        let msg = await message.channel.send("Achat en cours...")
        try{
            db.subtract(`coins_${message.author.id}`, 1000)
            db.add(`cuir_${message.author.id}`, 1)
            creatorCode("coins", 1000)
            msg.delete()
            message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez 1 ${adventure.cuir}!`)
            adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter 1 cuir ${adventure.cuir} !`)
        }catch{
            msg.delete()
            message.channel.send("Une erreur s'est produite!")
        }
}
else if(offre == 5) {
    if(db.get(`scissors_${message.author.id}`)) return message.channel.send("Vous possédez déjà des ciseaux!")
    if(db.get(`coins_${message.author.id}`) < 7000) return message.channel.send(`**${message.author.username},** il vous manque **${7000 - db.get(`coins_${message.author.id}`)}** ${adventure.coins} pour pouvoir acheter l'offre ${offre}!`)
    let msg = await message.channel.send("Achat en cours...")
    try{
        db.subtract(`coins_${message.author.id}`, 7000)
        db.set(`scissors_${message.author.id}`, true)
        creatorCode("coins", 7000)
        msg.delete()
        message.channel.send(`Félicitation, vous venez d'acheter l'offre ${offre} et vous gagnez des ciseaux!`)
        adventureLogs(bot, `\`[ACHAT]\`: ${message.author.tag} vient d'acheter des ciseaux ${adventure.scissors} !`)
    }catch{
        msg.delete()
        message.channel.send("Une erreur s'est produite!")
    }
}
}
}

module.exports.help = {
    name: "buy",
    description: "Achète un produit de la boutique.",
    usage: `buy [ID de la catégorie] [nombre]`,
    example: `buy 100 2`,
    category: "aventure",
    cooldown: 10
}