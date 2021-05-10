const { get } = require('axios');
const Canvas = require("canvas")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let mentionedUser = message.mentions.users.first() ? message.mentions.users.first() : message.guild.members.cache.get(args[1]) ? message.guild.members.cache.get(args[1]).user : message.author
    const filters = [
        {
            name: `autism`,
            canvas: true,
            link: `https://cdn.discordapp.com/attachments/714096850256527361/737013974201139250/autism.jpg`,
            rect: false,
            canvasx: 250,
            canvasy: 300,
            filterx: 0,
            filtery: 200,
            filtersizex: 250,
            filtersizey: 100,
            avatarx: 0,
            avatary: 0,
            avatarsizex: 250,
            avatarsizey: 200
        },
        {
            name: `baby`,
            canvas: false,
            link: `https://useless-api--vierofernando.repl.co/baby?image=${mentionedUser.displayAvatarURL({format: "png", size: 1024})}`,
        },
        {
            name: `beautiful`,
            canvas: false,
            link: `https://api.lensy.tech/v1/build/beautiful?url=${mentionedUser.displayAvatarURL({format: "png"})}`,
        },
        {
            name: `blur`,
            canvas: false,
            link: `https://api.lensy.tech/v1/build/blur?url=${mentionedUser.displayAvatarURL({format: "png"})}`,
        },
        {
            name: `challenger`,
            canvas: false,
            link: `https://api.lensy.tech/v1/build/challenger?url=${mentionedUser.displayAvatarURL({format: "png"})}`,
        },
        {
            name: `cinema`,
            canvas: true,
            link: `https://ak.picdn.net/shutterstock/videos/22017940/thumb/9.jpg`,
            rect: false,
            canvasx: 400,
            canvasy: 250,
            filterx: 0,
            filtery: 0,
            filtersizex: 400,
            filtersizey: 250,
            avatarx: 125,
            avatary: 70,
            avatarsizex: 155,
            avatarsizey: 85
        },
        {
            name: `communist`,
            canvas: false,
            link: `https://api.alexflipnote.dev/filter/communist?image=${mentionedUser.displayAvatarURL({format: "png", size: 1024})}`,
        },
        {
            name: `contrast`,
            canvas: false,
            link: `https://api.lensy.tech/v1/build/contrast?url=${mentionedUser.displayAvatarURL({format: "png", size: 1024})}`,
        },
        {
            name: `deepfry`,
            canvas: false,
            link: `https://api.alexflipnote.dev/filter/deepfry?image=${mentionedUser.displayAvatarURL({format: "png", size: 1024})}`,
        },
        {
            name: `distort`,
            canvas: false,
            link: `https://api.lensy.tech/v1/build/distort?url=${mentionedUser.displayAvatarURL({format: "png"})}`,
        },
        {
            name: `heaven`,
            canvas: false,
            link: `https://vacefron.nl/api/heaven?user=${mentionedUser.displayAvatarURL({ format: "png", size: 1024})}`,
        },
        {
            name: `invert`,
            canvas: false,
            link: `https://api.alexflipnote.dev/filter/invert?image=${mentionedUser.displayAvatarURL({ format: "png", size: 1024})}`,
        },
        {
            name: `jail`,
            canvas: false,
            link: `https://api.lensy.tech/v1/build/prison?url=${mentionedUser.displayAvatarURL({format: "png"})}`,
        },
        {
            name: `magik`,
            canvas: false,
            link: `https://api.alexflipnote.dev/filter/magik?image=${mentionedUser.displayAvatarURL({format: "png"})}`,
        },
        {
            name: `pixelate`,
            canvas: false,
            link: `https://api.lensy.tech/v1/build/pixelate?url=${mentionedUser.displayAvatarURL({format: "png"})}`,
        },
        {
            name: `posterize`,
            canvas: false,
            link: `https://api.lensy.tech/v1/build/posterize?url=${mentionedUser.displayAvatarURL({format: "png"})}`,
        },
        {
            name: `primitive`,
            canvas: false,
            link: `https://useless-api--vierofernando.repl.co/primitive?image=${mentionedUser.displayAvatarURL({format: "png", size: 1024})}`,
        },
        {
            name: `ps4`,
            canvas: true,
            link: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c7303d-1642-404c-98d7-c00842391a60/d9lwkwe-949b3aca-1644-40bd-baa4-220e783601be.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTJjNzMwM2QtMTY0Mi00MDRjLTk4ZDctYzAwODQyMzkxYTYwXC9kOWx3a3dlLTk0OWIzYWNhLTE2NDQtNDBiZC1iYWE0LTIyMGU3ODM2MDFiZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.h96d6x8nA1OAHkk_13EdpM6RY-PDG08SA6rKFxcNWLo`,
            rect: false,
            canvasx: 1000,
            canvasy: 1247,
            filterx: 0,
            filtery: 0,
            filtersizex: 1000,
            filtersizey: 1247,
            avatarx: 0,
            avatary: 140,
            avatarsizex: 1000,
            avatarsizey: 1107
        },
        {
            name: `rip`,
            canvas: false,
            link: `https://api.lensy.tech/v1/build/rip?url=${mentionedUser.displayAvatarURL({format: "png"})}`,
        },
        {
            name: `salty`,
            canvas: false,
            link: `https://api.alexflipnote.dev/salty?image=${mentionedUser.displayAvatarURL({format: "png", size: 1024})}`,
        },
        {
            name: `sepia`,
            canvas: false,
            link: `https://api.lensy.tech/v1/build/sepia?url=${mentionedUser.displayAvatarURL({format: "png"})}`,
        },
        {
            name: `snow`,
            canvas: false,
            link: `https://api.alexflipnote.dev/filter/snow?image=${mentionedUser.displayAvatarURL({format: "png"})}`,
        },
        {
            name: `triggered`,
            canvas: false,
            link: `https://api.lensy.tech/v1/build/triggered?url=${mentionedUser.displayAvatarURL({format: "png"})}`,
        },
        {
            name: `tv`,
            canvas: false,
            link: `https://useless-api--vierofernando.repl.co/ferbtv?image=${mentionedUser.displayAvatarURL({format: "png", size: 1024})}`,
        },
        {
            name: `wasted`,
            canvas: false,
            link: `https://api.lensy.tech/v1/build/wasted?url=${mentionedUser.displayAvatarURL({format: "png"})}`,
        },
        {
            name: `wanted`,
            canvas: true,
            link: `https://i.pinimg.com/originals/1a/21/f0/1a21f05ba6e3e7ae528ccfa538fb7cef.png`,
            rect: false,
            canvasx: 1227,
            canvasy: 1600,
            filterx: 0,
            filtery: 0,
            filtersizex: 1227,
            filtersizey: 1600,
            avatarx: 150,
            avatary: 430,
            avatarsizex: 900,
            avatarsizey: 800
        },
        {
            name: `xbox`,
            canvas: true,
            link: `https://images-na.ssl-images-amazon.com/images/I/51Yn7vQ%2BpBL._AC_SY400_.jpg`,
            rect: true,
            rectx: 0,
            recty: 33,
            rectsizex: 310,
            rectsizey: 352,
            canvasx: 310,
            canvasy: 400,
            filterx: 0,
            filtery: 0,
            filtersizex: 310,
            filtersizey: 400,
            avatarx: 0,
            avatary: 33,
            avatarsizex: 310,
            avatarsizey: 352
        }
    ]
    if(!args[0]) return message.channel.send(`Veuillez mettre un filtre!\n\nVoici la liste des différents filtres: \n${filters.map(f => `<:doublefleche:773257544570765312> ${f.name}`).join(`\n`)}`)
    const filter = filters.find(t => t.name == args[0])
    if(!filter) return message.channel.send(`Le filtre **${args[0]}** n'existe pas!`)
    let m = await message.channel.send("<a:generating:758997688926076938> Génération en cours...")
    if(!filter.canvas) {
get(filter.link, {
  responseType: 'arraybuffer'
})
  .then((res) => {
    message.channel.send({
      files: [{
        attachment: res.data,
        name: `${filter.name}.${filter.name == "triggered" ? "gif" : "png"}`
      }]
    })
    m.delete()
  })
  .catch((error) => console.error(`Something went wrong. Error: ${error}`));
} else {
    const canvas = Canvas.createCanvas(filter.canvasx, filter.canvasy)
    const ctx = canvas.getContext("2d")

    const filtre = await Canvas.loadImage(filter.link)
    ctx.drawImage(filtre, filter.filterx, filter.filtery, filter.filtersizex, filter.filtersizey)

    if(filter.rect) ctx.fillRect(filter.rectx, filter.recty, filter.rectsizex, filter.rectsizey)

    const avatar = await Canvas.loadImage(mentionedUser.displayAvatarURL({ format: "png"}))
    ctx.drawImage(avatar, filter.avatarx, filter.avatary, filter.avatarsizex, filter.avatarsizey)

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `${filter.name}.png`)
    message.channel.send(attachment)
    m.delete()
}
}

module.exports.help = {
    name: `filter`,
    description: `Rajoute à un filtre du style choisi sur votre avatar ou d'un membre.`,
    usage: `filter [style] <user/ID>`,
    example: `filter invert`,
    category: `images`,
    cooldown: 7
}