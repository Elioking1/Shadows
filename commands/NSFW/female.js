const Discord = require('discord.js');
const females = [
    "https://i.redd.it/oqhtc2uj60x41.jpg",
    "https://i.imgur.com/rAg9Zxx.jpg",
    "https://i.redd.it/6sun1wyhmx851.jpg",
    "https://imgur.com/t/enf/KYr6Tdz;https://i.redd.it/ab9j2fhdtvk41.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730658427008712704/0d7cca27c1b82f50b589a0b1447d825e.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730658427382268015/ebd2b73c9d9c9ba19671a9f590036c75.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730658427776401508/c23f0290fd6623e9a6a49a00c8ed2aff.png;https://cdn.discordapp.com/attachments/702259375091220480/730658428178923600/af85fb0552700d2029aa1583fcf38643.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730658428531507240/8edc5182dc36fb923bfecd1e24e93865.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730658678167830538/rBVaSFuHkFaATN0hAAJibsp_FLE443.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730658678549774387/c462576909b0562e8664d083b21deafa_xl.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730658678922936390/cc75b7e7829ea8e33ed8bc83b9a6c262.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730658679208280104/84c769e64b0452eb032407df0fa63528.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730658679447093309/378fcb39e287c524c8781e6fee037c5c.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730658679661133834/f41058c2bc5164d838b5b8c3ba14dcf4.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730658679837425704/New-Sexy-Swimsuits-Girls-Bikini-Set-Bathing-Suit-Swimwear-Women-2017-Summer-Swim-suit-Brazilian-Swim.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730658680244011068/32c89612bd167c3a86ca838b2296af24.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730658680495800340/fc701766267bc17c6fe3121867ea8016.png;https://cdn.discordapp.com/attachments/702259375091220480/730659105777254420/51PO59_g-gL._AC_.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730659105961934858/H6e926dc4f764483ca9ed0a23ca5b25b01.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730659106226176020/samantha-hoopes-in-sports-illustrated-swimsuit-issue-2018_18.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730659304239005726/Silvia-Caruso.jpg",
    "https://cdn.discordapp.com/attachments/702259375091220480/730659304503377921/m83vkh64qeh01.jpg",
    "https://imgur.com/gallery/H7uNr", 
    "https://i.imgur.com/ctnIRnQ.jpg", 
    "https://i.imgur.com/wpHd35F.jpg", 
    "https://i.imgur.com/cQFCGJp.jpg", 
    "https://i.imgur.com/tpCXdXt.jpg", 
    "https://i.imgur.com/2JLtj2W.jpg", 
    "https://i.imgur.com/Wo6b1iA.jpg", 
    "https://i.imgur.com/9Vejilu.jpg", 
    "https://i.imgur.com/gdylgtO.jpg", 
    "https://i.imgur.com/8L50UkA.jpg", 
    "https://i.imgur.com/yWgfcFG.jpg", 
    "https://i.imgur.com/C546J5K.jpg", 
    "https://i.imgur.com/QSVmAYU.jpg", 
    "https://i.imgur.com/88b0A0Z.jpg"
]

module.exports.run = async (bot, message, args) => {
    const female = females[Math.floor(Math.random() * females.length)];

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Female")
.setImage(female)
message.channel.send(embed)
}

module.exports.help = {
    name: "female",
    description: "Affiche une image de catégorie female.",
    usage: `female`,
    category: "nsfw",
    cooldown: 10
}