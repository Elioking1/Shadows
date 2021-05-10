const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
     const mentionedUser = message.mentions.users.first() ? message.mentions.users.first() : message.guild.members.cache.get(args[0]) ? message.guild.members.cache.get(args[0]).user : message.author
     const ip1 = Math.floor(Math.random() * 100 + 1)
     const ip2 = Math.floor(Math.random() * 345)
     const ip3 = Math.floor(Math.random() * 168)
     const ip4 = Math.floor(Math.random() * 254)
     const adresses = [
         "iloveloli@gmail.com",
         "bruhmoment@gmail.com",
         "p0rnisth3b3st@gmail.com",
         "zckz0ck@gmail.com",
         "y0rgoy7@gmail.com",
         "wtfmoment@gmail.com",
         "drpdr0p@gmail.com",
         "ihatemyself@gmail.com",
         "ksbosl@gmail.com",
         "frogith3frog@gmail.com",
         "play4u@gmail.com",
         "fbsown@gmail.com",
         "d0myson@gmail.com",
         "ihopetodie@gmail.com",
         "aliexpress@gmail.com",
         "drakeb3stmeme@gmail.com",
         "bimbomjohnny@gmail.com",
         "blfrhg@gmail.com",
         "xbotth3xbox@gmail.com",
         "shadowsth3b3st@gmail.com"
     ]
     const randomadress = adresses[Math.floor(Math.random() * adresses.length)]

     const passwords = [
         "sxmfg22",
         "pifpaf44",
         "ursoxko332",
         "password223",
         "billgayts443",
         "roblox556",
         "stivjobs5",
         "begf0rit",
         "hhj765",
         "chepakoi729",
         "javdosb015",
         "adopejpeg123",
         "ilovexbox360",
         "jojomagician492",
         "littlebobip431",
         "wobdomia821",
         "ilovedisc134",
         "m98g",
         "suxmdix25",
         "pifpaf33",
         "flimflam36",
         "smgf665",
         "hhgkl998",
         "ssfh56",
         "hhgk445",
         "p0rnl9ve5",
         "ow052",
         "coruscant28",
         "toktik91",
         "bsosb37",
         "ksblsnw016",
         "kwboxbw20,p0pp0pbuggi192",
         "toututou103"
     ]
     const randompasword = passwords[Math.floor(Math.random() * passwords.length)]

     const embed = new Discord.MessageEmbed()
     .setTitle(`En train de hack ${mentionedUser.username}`)
     .setDescription(`**Adresse IP**\n1${ip1}.${ip2}.${ip3}.${ip4}\n-------------------------------------------------\n**Adresse Mail**\n${randomadress}\n-------------------------------------------------\n**Mot de passe**\n${randompasword}\n-------------------------------------------------`)
     message.channel.send(embed)
}
 
module.exports.help = {
    name: "hack",
    description: "Hack quelqu'un (commande sans danger).",
    usage: "hack <user/ID>",
    category: "fun",
    cooldown: 5
}