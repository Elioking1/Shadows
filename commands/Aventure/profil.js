const Discord = require(`discord.js`)
const adventure = require(`../../database/adventure.json`)
const db = require(`quick.db`)
 
module.exports.run = async (bot, message, args) => {
    let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    if(!db.get(`coins_${mentionedMember.user.id}`)) db.set(`coins_${mentionedMember.user.id}`, 0)
    if(!db.get(`gems_${mentionedMember.user.id}`)) db.set(`gems_${mentionedMember.user.id}`, 0)
    if(mentionedMember.user.bot) return message.channel.send(`Les bots n'ont pas de profil!`)
    const embed = new Discord.MessageEmbed()
    .setTitle(`Profil de ${mentionedMember.user.username}`)
    .setColor(`RAMDOM`)
    .setThumbnail(mentionedMember.user.displayAvatarURL({ dynamic: true }))
    .addField(`${adventure.sacoche} Sacoche`, `${adventure.coins} Pièces: ${db.get(`coins_${mentionedMember.user.id}`)}\n${adventure.gems} Gemmes: ${db.get(`gems_${mentionedMember.user.id}`)}`, true)
    .addField(`🛡️ Équipements`, `${adventure.hammer} Marteau: ${db.get(`hammer_${mentionedMember.user.id}`) ? `✅` : `❌`}\n${adventure.battery} Batterie: ${db.get(`battery_${mentionedMember.user.id}`) ? `✅` : `❌`}\n${adventure.fishingpole} Canne à pêche: ${db.get(`fishingpole_${mentionedMember.user.id}`) ? `✅` : `❌`}\n${adventure.axe} Hache: ${db.get(`axe_${mentionedMember.user.id}`) ? `✅` : `❌`}\n${adventure.pick} Pioche: ${db.get(`pick_${mentionedMember.user.id}`) ? `✅` : `❌`}\n${adventure.shovel} Pelle: ${db.get(`shovel_${mentionedMember.user.id}`) ? `✅` : `❌`}\n${adventure.jackhammer} Marteau Piqueur: ${db.get(`jackhammer_${mentionedMember.user.id}`) ? `✅` : `❌`}\n${adventure.pistol} Pistolet: ${db.get(`pistol_${mentionedMember.user.id}`) ? `✅` : `❌`}\n🗡${adventure.knife} Épée: ${db.get(`sword_${mentionedMember.user.id}`) ? `✅` : `❌`}\n${adventure.scissors} Ciseaux: ${db.get(`scissors_${mentionedMember.user.id}`) ? `✅` : `❌`}\n${adventure.sewingmachine} Machine à coudre: ${db.get(`sewingmachine_${mentionedMember.user.id}`) ? `✅` : `❌`}`, true)
    .addField(`⚒️ Ressources`, `${adventure.wood} Bois: ${db.get(`wood_${mentionedMember.user.id}`)}\n${adventure.iron} Fer: ${db.get(`iron_${mentionedMember.user.id}`)}\n${adventure.stone} Pierre: ${db.get(`stone_${mentionedMember.user.id}`)}\n${adventure.rope} Corde: ${db.get(`rope_${mentionedMember.user.id}`)}\n${adventure.peau} Peau d'animal: ${db.get(`peau_${mentionedMember.user.id}`)}\n${adventure.tissu} Tissu: ${db.get(`tissu_${mentionedMember.user.id}`)}\n${adventure.coton} Coton: ${db.get(`coton_${mentionedMember.user.id}`)}\n${adventure.cuir} Cuir: ${db.get(`cuir_${mentionedMember.user.id}`)}\n${adventure.fil} Fil: ${db.get(`fil_${mentionedMember.user.id}`)}\n${adventure.bronze} Bronze: ${db.get(`bronze_${mentionedMember.user.id}`)}\n${adventure.silver} Argent: ${db.get(`silver_${mentionedMember.user.id}`)}\n${adventure.gold} Or: ${db.get(`gold_${mentionedMember.user.id}`)}\n${adventure.boulonetvis} Boulon et vis: ${db.get(`boulonvis_${mentionedMember.user.id}`)}\n${adventure.energy} Énergie: ${db.get(`energy_${mentionedMember.user.id}`)}`, true)
    .addField(`🐟 Poissons`, `${adventure.sardine} Sardine: ${db.get(`sardine_${mentionedMember.user.id}`)}\n${adventure.fugu} Fugu: ${db.get(`fugu_${mentionedMember.user.id}`)}\n${adventure.clownfish} Poisson Clown: ${db.get(`clownfish_${mentionedMember.user.id}`)}\n${adventure.fishpapillon} Poisson Papillon: ${db.get(`fishpapillon_${mentionedMember.user.id}`)}\n${adventure.shark} Requin: ${db.get(`shark_${mentionedMember.user.id}`)}\n${adventure.whale} Baleine: ${db.get(`whale_${mentionedMember.user.id}`)}`,true)
    .addField(`🔷 Cristaux`, `${adventure.greencristal} Cristal Vert: ${db.get(`cristalvert_${mentionedMember.user.id}`)}\n${adventure.redcristal} Cristal Rouge: ${db.get(`cristalrouge_${mentionedMember.user.id}`)}\n${adventure.pinkcristal} Cristal Rose: ${db.get(`cristalrose_${mentionedMember.user.id}`)}\n${adventure.purplecristal} Cristal Mauve: ${db.get(`cristalmauve_${mentionedMember.user.id}`)}\n${adventure.yellowcristal} Cristal Jaune: ${db.get(`cristaljaune_${mentionedMember.user.id}`)}\n${adventure.lightbluecristal} Cristal Bleu Clair: ${db.get(`cristalbleuclair_${mentionedMember.user.id}`)}\n${adventure.bluecristal} Cristal Bleu: ${db.get(`cristalbleu_${mentionedMember.user.id}`)}`, true)
    .addField(`👔 Vêtements`, `${adventure.coat} Manteau: ${db.get(`coat_${mentionedMember.user.id}`)}\n${adventure.tshirt} T-Shirt: ${db.get(`shirt_${mentionedMember.user.id}`)}\n${adventure.jeans} Pantalon: ${db.get(`jeans_${mentionedMember.user.id}`)}\n${adventure.short} Short: ${db.get(`short_${mentionedMember.user.id}`)}\n${adventure.dress} Robe: ${db.get(`dress_${mentionedMember.user.id}`)}\n${adventure.kimono} Kimono: ${db.get(`kimono_${mentionedMember.user.id}`)}\n${adventure.socks} Chaussettes: ${db.get(`socks_${mentionedMember.user.id}`)}\n${adventure.scarf} Écharpe: ${db.get(`scarf_${mentionedMember.user.id}`)}`, true)
    message.channel.send(embed)
}

module.exports.help = {
    name: `profil`,
    description: `Affiche votre profil ou celui du membre mentionné dans le système aventure du bot.`,
    usage: `profil <user/ID>`,
    category: "aventure",
    cooldown: 10
}