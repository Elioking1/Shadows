const { get } = require('axios');

module.exports.run = async (bot, message, args) => {
    const texts = [
        {
            name: "fire",
            link: `https://flamingtext.com/net-fu/proxy_form.cgi?script=fire-logo&text=${args.slice(1).join("+")}&_loc=generate&imageoutput=true`
        },
        {
            name: "flame",
            link: `https://flamingtext.com/net-fu/proxy_form.cgi?script=flame-logo&text=${args.slice(1).join("+")}&_loc=generate&imageoutput=true`
        },
        {
            name: "graphic",
            link: `https://flamingtext.com/net-fu/proxy_form.cgi?script=graffiti-logo&text=${args.slice(1).join("+")}&_loc=generate&imageoutput=true`
        },
        {
            name: "genius",
            link: `https://flamingtext.com/net-fu/proxy_form.cgi?script=genius-logo&text=${args.slice(1).join("+")}&_loc=generate&imageoutput=true`
        },
        {
            name: "gold",
            link: `https://flamingtext.com/net-fu/proxy_form.cgi?script=winner-logo&text=${args.slice(1).join("+")}&_loc=generate&imageoutput=true`
        },
        {
            name: "ice",
            link: `https://flamingtext.com/net-fu/proxy_form.cgi?script=ice-logo&text=${args.slice(1).join("+")}&_loc=generate&imageoutput=true`
        },
        {
            name: "inferno",
            link: `https://flamingtext.com/net-fu/proxy_form.cgi?script=inferno-logo&text=${args.slice(1).join("+")}&_loc=generate&imageoutput=true`
        },
        {
            name: "metal",
            link: `https://flamingtext.com/net-fu/proxy_form.cgi?script=clan-logo&text=${args.slice(1).join("+")}&_loc=generate&imageoutput=true`
        },
        {
            name: "neon",
            link: `https://flamingtext.com/net-fu/proxy_form.cgi?script=neon-logo&text=${args.slice(1).join("+")}&_loc=generate&imageoutput=true`
        },
        {
            name: "pink",
            link: `https://flamingtext.com/net-fu/proxy_form.cgi?script=fluffy-logo&text=${args.slice(1).join("+")}&_loc=generate&imageoutput=true`
        },
        {
            name: "poster",
            link: `https://flamingtext.com/net-fu/proxy_form.cgi?script=amped-logo&text=${args.slice(1).join("+")}&_loc=generate&imageoutput=true`
        },
        {
            name: "rainbow",
            link: `https://flamingtext.com/net-fu/proxy_form.cgi?script=orlando-logo&text=${args.slice(1).join("+")}&_loc=generate&imageoutput=true`
        },
        {
            name: "smurf",
            link: `https://flamingtext.com/net-fu/proxy_form.cgi?script=smurfs-logo&text=${args.slice(1).join("+")}&_loc=generate&imageoutput=true`
        },
        {
            name: "starwars",
            link: `https://flamingtext.com/net-fu/proxy_form.cgi?script=star-wars-logo&text=${args.slice(1).join("+")}&_loc=generate&imageoutput=true`
        },
        {
            name: "supreme",
            link: `https://api.alexflipnote.dev/supreme?text=${args.slice(1).join("%20")}`
        },
        {
            name: "water",
            link: `https://flamingtext.com/net-fu/proxy_form.cgi?script=water-logo&text=${args.slice(1).join("+")}&_loc=generate&imageoutput=true`
        },
    ]
    if(!args[0]) return message.channel.send(`Veuillez mettre une texture!\n\nVoici la liste des différentes textures:\n${texts.map(t => `<:doublefleche:773257544570765312> ${t.name}`).join(`\n`)}`)
    const text = texts.find(t => t.name == args[0])
    if(!text) return message.channel.send(`La texture **${args[0]}** n'existe pas!`)
    if(!args.slice(1).length) return message.channel.send("Veuillez mettre un texte!")
    if(args.slice(1).length > 25) return message.channel.send("Votre message est très long!")
    let m = await message.channel.send("<a:generating:758997688926076938> Génération en cours...")

get(text.link, {
  responseType: 'arraybuffer'
})
  .then((res) => {
    message.channel.send({
      files: [{
        attachment: res.data,
        name: `${text.name}.png`
      }]
    })
    m.delete()
  })
  .catch((error) => console.error(`Something went wrong. Error: ${error}`));
}

module.exports.help = {
    name: "text",
    description: "Transforme votre texte en image selon la texture mise.",
    usage: `text [texture] [texte]`,
    example: "text gold Shadows le best",
    category: "images",
    cooldown: 7
}