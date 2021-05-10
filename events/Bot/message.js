const Discord = require("discord.js")
const db = require("quick.db")
const config = require("../../config.json")

module.exports = async (bot, message) => {
    if(!db.get(`coins_${message.author.id}`)) db.set(`coins_${message.author.id}`, 0)
    if(!db.get(`gems_${message.author.id}`)) db.set(`gems_${message.author.id}`, 0)
    if(!db.get(`wood_${message.author.id}`)) db.set(`wood_${message.author.id}`, 0)
    if(!db.get(`bronze_${message.author.id}`)) db.set(`bronze_${message.author.id}`, 0)
    if(!db.get(`silver_${message.author.id}`)) db.set(`silver_${message.author.id}`, 0)
    if(!db.get(`gold_${message.author.id}`)) db.set(`gold_${message.author.id}`, 0)
    if(!db.get(`iron_${message.author.id}`)) db.set(`iron_${message.author.id}`, 0)
    if(!db.get(`stone_${message.author.id}`)) db.set(`stone_${message.author.id}`, 0)
    if(!db.get(`rope_${message.author.id}`)) db.set(`rope_${message.author.id}`, 0)
    if(!db.get(`sardine_${message.author.id}`)) db.set(`sardine_${message.author.id}`, 0)
    if(!db.get(`fugu_${message.author.id}`)) db.set(`fugu_${message.author.id}`, 0)
    if(!db.get(`clownfish_${message.author.id}`)) db.set(`clownfish_${message.author.id}`, 0)
    if(!db.get(`fishpapillon_${message.author.id}`)) db.set(`fishpapillon_${message.author.id}`, 0)
    if(!db.get(`shark_${message.author.id}`)) db.set(`shark_${message.author.id}`, 0)
    if(!db.get(`whale_${message.author.id}`)) db.set(`whale_${message.author.id}`, 0)
    if(!db.get(`cristalvert_${message.author.id}`)) db.set(`cristalvert_${message.author.id}`, 0)
    if(!db.get(`cristalrouge_${message.author.id}`)) db.set(`cristalrouge_${message.author.id}`, 0)
    if(!db.get(`cristalrose_${message.author.id}`)) db.set(`cristalrose_${message.author.id}`, 0)
    if(!db.get(`cristalmauve_${message.author.id}`)) db.set(`cristalmauve_${message.author.id}`, 0)
    if(!db.get(`cristaljaune_${message.author.id}`)) db.set(`cristaljaune_${message.author.id}`, 0)
    if(!db.get(`cristalbleuclair_${message.author.id}`)) db.set(`cristalbleuclair_${message.author.id}`, 0)
    if(!db.get(`cristalbleu_${message.author.id}`)) db.set(`cristalbleu_${message.author.id}`, 0)
    if(!db.get(`energy_${message.author.id}`)) db.set(`energy_${message.author.id}`, 0)
    if(!db.get(`boulonvis_${message.author.id}`)) db.set(`boulonvis_${message.author.id}`, 0)
    if(!db.get(`peau_${message.author.id}`)) db.set(`peau_${message.author.id}`, 0)
    if(!db.get(`cuir_${message.author.id}`)) db.set(`cuir_${message.author.id}`, 0)
    if(!db.get(`tissu_${message.author.id}`)) db.set(`tissu_${message.author.id}`, 0)
    if(!db.get(`fil_${message.author.id}`)) db.set(`fil_${message.author.id}`, 0)
    if(!db.get(`coton_${message.author.id}`)) db.set(`coton_${message.author.id}`, 0)
    if(!db.get(`cuir_${message.author.id}`)) db.set(`cuir_${message.author.id}`, 0)
    if(!db.get(`coat_${message.author.id}`)) db.set(`coat_${message.author.id}`, 0)
    if(!db.get(`shirt_${message.author.id}`)) db.set(`shirt_${message.author.id}`, 0)
    if(!db.get(`jeans_${message.author.id}`)) db.set(`jeans_${message.author.id}`, 0)
    if(!db.get(`short_${message.author.id}`)) db.set(`short_${message.author.id}`, 0)
    if(!db.get(`dress_${message.author.id}`)) db.set(`dress_${message.author.id}`, 0)
    if(!db.get(`kimono_${message.author.id}`)) db.set(`kimono_${message.author.id}`, 0)
    if(!db.get(`socks_${message.author.id}`)) db.set(`socks_${message.author.id}`, 0)
    if(!db.get(`scarf_${message.author.id}`)) db.set(`scarf_${message.author.id}`, 0)
    if(!db.get(`purse_${message.author.id}`)) db.set(`purse_${message.author.id}`, 0)
    if(!db.get(`briefcase_${message.author.id}`)) db.set(`briefcase_${message.author.id}`, 0)
    if(!db.get(`backpack_${message.author.id}`)) db.set(`backpack_${message.author.id}`, 0)
    if(!db.get(`suitcase_${message.author.id}`)) db.set(`suitcase_${message.author.id}`, 0)
    if(!db.get(`cuir_${message.author.id}`)) db.set(`cuir_${message.author.id}`, 0)

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    let links = [
        "https://",
        "http://",
        "www."
      ]
      let alstat = db.get(`antiliens_${message.guild.id}`)
      if(alstat == "on" && !message.member.hasPermission("ADMINISTRATOR") && !message.author.bot) {
        let confirm = false;
       
        var i;
        for(i = 0;i < links.length; i++) {
          
          if(message.content.toLowerCase().includes(links[i].toLowerCase()))
            confirm = true;
          
        }
        if(confirm) {
          message.delete()
          return message.channel.send(`<a:warning:721696690414944286>**${message.author.username},** les liens sont interdits !`)
      }
    }
    let prefix = await db.get(`Prefix_${message.guild.id}`)
    if(prefix === null) prefix = config.default_prefix
    if (new RegExp(bot.user.id).test(message.content.trim().split(' ')[0])) return message.channel.send(`Coucou je suis **${bot.user.username}**, un bot multifonction totalement repensé pour votre confort.\nPour voir mes commandes faites \`${prefix}help\` !`)
    if (!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).split(/ +/);
    let commandName = args.shift().toLowerCase();
    if(!bot.commands.get(commandName)) return;
    
    let command = bot.commands.get(commandName);
  
    if(command.help.category == "nsfw" && !message.channel.nsfw) return message.channel.send(`<a:warning:737605020324986900> ${message.author.username}, cette commande n'est utilisable uniquement dans un salon NSFW!`)
  
  if(!bot.cooldowns.has(command.help.name)) {
  bot.cooldowns.set(command.help.name, new Discord.Collection())
  }
  
  const TimeNow = Date.now()
  const tStamps = bot.cooldowns.get(command.help.name)
  const cdAmount = (command.help.cooldown) * 1000
  
  if(tStamps.has(message.author.id)) {
  const cdexpirationTime = tStamps.get(message.author.id) + cdAmount
  
  if(TimeNow < cdexpirationTime) {
  TimeLeft = (cdexpirationTime - TimeNow) / 1000
  let HoursLeft = Math.floor(TimeLeft.toFixed(0) / 60 / 60)
  let MinutesLeft = Math.floor((TimeLeft.toFixed(0) / 60) - (HoursLeft * 60))
  let SecondsLeft = Math.floor(TimeLeft.toFixed(0) - ((HoursLeft * 60 * 60) + (MinutesLeft * 60)))
  let cdmessage = "Veuillez patienter "
  if(HoursLeft !== 0) cdmessage += `${HoursLeft} ${HoursLeft > 1 ? "heures" : "heure"} `
  if(MinutesLeft !== 0) cdmessage += `${MinutesLeft} ${MinutesLeft > 1 ? "minutes" : "minute"} `
  if(HoursLeft == 0 && MinutesLeft == 0 && SecondsLeft == 0) SecondsLeft = 1
  if(SecondsLeft !== 0) { 
    if(HoursLeft !== 0 && MinutesLeft !== 0) cdmessage += `et ${SecondsLeft} ${SecondsLeft > 1 ? "secondes" : "seconde"} `
    else cdmessage += `${SecondsLeft} ${SecondsLeft > 1 ? "secondes" : "seconde"} `
  }
  return message.reply(`${cdmessage}avant de pouvoir réutiliser la commande **${command.help.name}**!`)
  }}
  tStamps.set(message.author.id, TimeNow)
  
  setTimeout(() => tStamps.delete(message.author.id), cdAmount)
  
  command.run(bot, message, args);
}