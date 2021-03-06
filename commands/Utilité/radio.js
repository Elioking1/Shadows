const Discord = require("discord.js")
const radios = require("../../database/radio.json")

module.exports.run = async (bot, message, args) => {
    const radioServer = bot.radio.get(message.guild.id)
const option = args[0]
const options = ["leave", "list", "play", "stop"]
if(!option) return message.channel.send(`Veuillez mettre l'une de ces options: \`${options.join(",")}\``)
if(!options.includes(option)) return message.channel.send(`Option \`${option}\` invalide!`)
if(option == "list") {
    const embedlist = new Discord.MessageEmbed()
    .setTitle("Liste des stations radios")
    .setDescription(`Veuillez choisir une de cette liste de language des stations radios:\n\n๐ซ๐ท Franรงaise\n๐บ๐ธ Anglaise\n๐ฑ๐ง Arabe`)
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    let msglist = await message.channel.send(embedlist)
    await msglist.react("๐ซ๐ท")
    await msglist.react("๐บ๐ธ")
    await msglist.react("๐ฑ๐ง")
    await msglist.react("โ")
    const filter = (reaction, user) => {
        return ['๐ซ๐ท', '๐บ๐ธ', '๐ฑ๐ง', 'โ'].includes(reaction.emoji.name) && user.id === message.author.id;
      };
      
      msglist.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
          const reaction = collected.first();
      
          if (reaction.emoji.name === '๐ซ๐ท') { 
              const embedfr = new Discord.MessageEmbed()
              .setTitle("๐ซ๐ท Stations Franรงaises ๐ซ๐ท")
              .setDescription(radios.radios.filter(r => r.language == "fr").map((r,i) => `${i + 1} - ${r.name}`))
              .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
              message.channel.send(embedfr)
              msglist.delete()
          } else if (reaction.emoji.name === '๐บ๐ธ') { 
            const embedfr = new Discord.MessageEmbed()
            .setTitle("๐บ๐ธ Stations Anglaises ๐บ๐ธ")
            .setDescription(radios.radios.filter(r => r.language == "us").map((r,i) => `${i + 1} - ${r.name}`))
            .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
            message.channel.send(embedfr)
            msglist.delete()
          }else if (reaction.emoji.name === '๐ฑ๐ง') { 
            const embedfr = new Discord.MessageEmbed()
            .setTitle("๐ฑ๐ง Stations Arabes ๐ฑ๐ง")
            .setDescription(radios.radios.filter(r => r.language == "lb").map((r,i) => `${i + 1} - ${r.name}`))
            .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
            message.channel.send(embedfr)
            msglist.delete()
          } else if (reaction.emoji.name === 'โ') {
            msglist.delete()
            }
        })
} else if(option == "play") {
    const radiofetch = args.slice(1).join(" ")
    if(!radiofetch) return message.channel.send("Veuillez mettre une station radio pour la faire jouer!")
    const voiceChannel = message.member.voice.channel
    if(!voiceChannel) return message.channel.send("Vous devez รชtre dans un salon vocal pour exรฉcuter cette commande!")
    const permissions = voiceChannel.permissionsFor(message.guild.me)
    if(!permissions.has("CONNECT")) return message.channel.send("Je n'ai pas les permissions me connecter dans ce vocal!")
    if(!permissions.has("SPEAK")) return message.channel.send("Je n'ai pas les permissions pour jouer une radio dans ce vocal!")
    const radio = radios.radios.find(r => r.name == radiofetch)
    if(!radio) return message.channel.send(`Radio \`${radiofetch}\` introuvable dans la liste des radios!`)
    if(message.guild.me.voice.channel && message.guild.me.voice.channel.id !== voiceChannel.id) return message.channel.send("Vous devez รชtre dans le mรชme salon vocal que moi!")
    if(!radioServer) {
        const radioConstruct = {
            name: radio.name,
            logo: radio.logo,
            voiceChannel: voiceChannel,
            connection: null,
            playing: true
        }
        bot.radio.set(message.guild.id, radioConstruct)
        try{
            const connection = await voiceChannel.join()
            radioConstruct.connection = connection
            const dispatcher = radioConstruct.connection.play(radio.link)
            dispatcher.setVolumeLogarithmic(5 / 5)
            const embed = new Discord.MessageEmbed()
            .setTitle("๐ฟ Radio en cours de lecture...")
            .setDescription(`La radio **${radio.name}** est en cours de lecture...`)
            .setThumbnail(radio.logo)
            .setFooter(`Demandรฉ par ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
            message.channel.send(embed)
        }catch (error){
            console.log(error)
            message.channel.send("Une erreur s'est produite!")
        }
    } else {
        try{
            await voiceChannel.join()
            const dispatcher = radioServer.connection.play(radio.link)
            dispatcher.setVolumeLogarithmic(5 / 5)
            const embed = new Discord.MessageEmbed()
            .setTitle("๐ฟ Radio en cours de lecture...")
            .setDescription(`La radio **${radio.name}** est en cours de lecture...`)
            .setThumbnail(radio.logo)
            .setFooter(`Demandรฉ par ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
            message.channel.send(embed)
        }catch (error){
            console.log(error)
            message.channel.send("Une erreur s'est produite!")
        }
    }
} else if(option == "stop") {
    const voiceChannel = message.member.voice.channel
    if(!voiceChannel) return message.channel.send("Vous devez รชtre dans un salon vocal pour exรฉcuter cette commande!")
    if(!radioServer) return message.channel.send("Aucune radio est en cours!")
    if(!message.guild.me.voice.channel) return message.channel.send("Aucune radio est en cours!")
    if(message.guild.me.voice.channel.id !== voiceChannel.id) return message.channel.send("Vous devez รชtre dans le mรชme salon vocal que moi!")
    radioServer.connection.dispatcher.end()
    message.channel.send("๐ La radio a bien รฉtรฉ arrรชtรฉ!")
} else if(option == "leave") {
    const voiceChannel = message.member.voice.channel
    if(!voiceChannel) return message.channel.send("Vous devez รชtre dans un salon vocal pour exรฉcuter cette commande!")
    if(!radioServer) return message.channel.send("Aucune radio est en cours!")
    if(!message.guild.me.voice.channel) return message.channel.send("Aucune radio est en cours!")
    if(message.guild.me.voice.channel.id !== voiceChannel.id) return message.channel.send("Vous devez รชtre dans le mรชme salon vocal que moi!")
    radioServer.voiceChannel.leave()
    message.channel.send("๐ J'ai quittรฉ le salon vocal avec succรจs!")
    bot.radio.delete(message.guild.id)
}
}

module.exports.help = {
    name: "radio",
    description: "Gรจre la radio.",
    usage: `radio [options]`,
    example: "radio list",
    category: "utilitรฉ",
    cooldown: 5
}