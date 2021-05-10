const config = require("../../config.json")
const radios = require("../../database/radio.json")

module.exports = async bot => {
    console.log(bot.user.username + " est en ligne !")
    setInterval(() => {
        const jeux = [
          `surveiller ${bot.channels.cache.size} salons`,
          `surveiller ${bot.users.cache.size} utilisateurs`,
          `surveiller ${bot.guilds.cache.size} serveurs`,
          `enregistrer ${config.creatorcodelist.length} codes créateurs`,
          `se connecter à ${radios.radios.length} stations radios`,
          `voter pour moi sur ${config.votes.length} sites`
        ]
     
        const jeu = Math.floor(Math.random() * jeux.length);
       bot.user.setActivity(jeux[jeu]);
       }, 12000);
}