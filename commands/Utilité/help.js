const Discord = require ("discord.js");
const db = require("quick.db")
const config = require("../../config.json");
const Pagination = require("discord.js-pagination")
const fs = require("fs")
 
module.exports.run = async (bot, message, args) => {
  let prefix = await db.get(`Prefix_${message.guild.id}`)
  if(prefix === null) prefix = config.default_prefix

  const admincommands = [
    "changechannelname",
    "clonechannel",
    "createcategory",
    "createrole",
    "createtextchannel",
    "createvoicechannel",
    "deletechannel",
    "deleterole"
  ]

  const adventurecommands = [
    "build",
    "buy",
    "collect",
    "creatorcode",
    "creatorcodeinfo",
    "creatorcodelist",
    "daily",
    "dig",
    "fish",
    "give-coins",
    "give-gems",
    "hunt",
    "mine",
    "profil",
    "recharge",
    "sell",
    "sew",
    "shop",
    "wood"
  ]

  const configcommands = [
    "anti-bot",
    "anti-links",
    "autorole",
    "ban-channel",
    "leave-channel",
    "logs",
    "menu-config",
    "prefix",
    "report-channel",
    "suggest-channel",
    "welcome-channel"
  ]

  const funcommands = [
    "8ball",
    "animaltest",
    "ascii",
    "bingo",
    "choose",
    "clap",
    "code",
    "cowsay",
    "decode",
    "embedsay",
    "flipcoin",
    "hack",
    "meme",
    "password",
    "quiz",
    "rate",
    "regional",
    "reverse",
    "roll",
    "rps",
    "say",
    "slots",
    "smallcaps",
    "smoke",
    "vdm"
  ]

  const imgcommands = [
    "achievement",
    "amazing",
    "art",
    "avatar",
    "aww",
    "captcha",
    "cat",
    "clyde",
    "didyoumean",
    "dog",
    "filter",
    "food",
    "fox",
    "qrcode",
    "tea",
    "text"
  ]

  const infocommands = [
    "botinfo",
    "channelinfo",
    "invite",
    "inviteinfo",
    "membercount",
    "owner",
    "ping",
    "roleinfo",
    "serverinfo",
    "status",
    "support",
    "uptime",
    "userinfo",
    "vote"
  ]

  const modcommands = [
    "addrole",
    "ban",
    "clear",
    "kick",
    "lockdown",
    "mute",
    "pin",
    "removerole",
    "tempmute",
    "unlockdown",
    "unmute",
    "unpin",
    "voicekick",
    "voicemove",
    "voicemute",
    "voiceunmute"
  ]

  const nsfwcommands = [
    "ass",
    "bdsm",
    "boobs",
    "cum",
    "doujin",
    "erokemo",
    "feet",
    "female",
    "fuck",
    "hentai",
    "hentaigif",
    "keta",
    "lick",
    "maid",
    "neko",
    "nudes",
    "orgy",
    "pussy",
    "solo",
    "sologif",
    "spank",
    "suck",
    "tits"
  ]

  const ownercommands = [
    "add-coins",
    "add-gems",
    "dm",
    "evaluate",
    "leave-guild",
    "remove-coins",
    "remove-gems",
    "restart",
    "serverlist",
    "shutdown"
  ]

  const socialcommands = [
    "angry",
    "baka",
    "bang",
    "blush",
    "confused",
    "cry",
    "cuddle",
    "dab",
    "dance",
    "feed",
    "greet",
    "highfive",
    "hug",
    "kiss",
    "laugh",
    "pat",
    "poke",
    "punch",
    "sad",
    "scared",
    "shrug",
    "slap",
    "sleepy",
    "smile",
    "smug",
    "stare",
    "tickle"
  ]

  const utilcommands = [
    "anime",
    "bug-report",
    "calculate",
    "color",
    "covid",
    "createinvite",
    "fortniteshop",
    "github",
    "hastebin",
    "help",
    "minecraftserver",
    "pokemon",
    "poll",
    "radio",
    "remindme",
    "report",
    "shorturl",
    "suggest",
    "weather"
  ]

  const numberofcommands = admincommands.length + adventurecommands.length + configcommands.length + funcommands.length + imgcommands.length + infocommands.length + modcommands.length + nsfwcommands.length + ownercommands.length + socialcommands.length + utilcommands.length

  if(!args.length) {

    let msg = await message.channel.send(`Bonjour ${message.author.username}, comment souhaitez-vous voir le menu d'aide?\n\n???? Sous forme d'une liste\n???? Sous forme d'un menu d??roulant\n?????? Sous forme d'un menu de commandes`)
    await msg.react("????")
    await msg.react("????")
    await msg.react("??????")
    await msg.react("???")

    const filter = (reaction, user) => {
      return ['????', '????', '??????', '???'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
      .then(collected => {
        const reaction = collected.first();
    
        if (reaction.emoji.name === '????') {
          
              const embed = new Discord.MessageEmbed()
         .setTitle("Menu d'aide")
         .setDescription(`Coucou je suis ${bot.user.username}, un bot Multifonction totalement repens?? ?? votre confort.\nMon pr??fix est \`\`${prefix}\`\`.\nJe poss??de un total de **${numberofcommands}** commandes\nFaites \`\`${prefix}help <nom de la commande>\`\` pour afficher plus d'infos sur une commande.\nVoici la liste de mes commandes.`) 
         .addField(`**???? <:doublefleche:773257544570765312> Administration [${admincommands.length}]**`, admincommands.map(c => `\`${c}\``).join(","))
         .addField(`**?????? <:doublefleche:773257544570765312> Aventure [${adventurecommands.length}]**`, adventurecommands.map(c => `\`${c}\``).join(","))
         .addField(`**?????? <:doublefleche:773257544570765312> Configuration [${configcommands.length}]**`, configcommands.map(c => `\`${c}\``).join(","))
         .addField(`**???? <:doublefleche:773257544570765312> Fun [${funcommands.length}]**`, funcommands.map(c => `\`${c}\``).join(","))
         .addField(`**??????? <:doublefleche:773257544570765312> Images [${imgcommands.length}]**`, imgcommands.map(c => `\`${c}\``).join(",")) 
         .addField(`**??????? <:doublefleche:773257544570765312> Informations [${infocommands.length}]**`, infocommands.map(c => `\`${c}\``).join(","))
         .addField(`**???? <:doublefleche:773257544570765312> Mod??ration [${modcommands.length}]**`, modcommands.map(c => `\`${c}\``).join(","))
         .addField(`**???? <:doublefleche:773257544570765312> NSFW [${nsfwcommands.length}]**`, nsfwcommands.map(c => `\`${c}\``).join(","))
         .addField(`**???? <:doublefleche:773257544570765312> Owner [${ownercommands.length}]**`, ownercommands.map(c => `\`${c}\``).join(","))
         .addField(`**???? <:doublefleche:773257544570765312> Social [${socialcommands.length}]**`, socialcommands.map(c => `\`${c}\``).join(","))
         .addField(`**??? <:doublefleche:773257544570765312> Utilit?? [${utilcommands.length}]**`, utilcommands.map(c => `\`${c}\``).join(","))
         .addField("\u200B", `[Inviter ${bot.user.username}](https://discord.com/oauth2/authorize?client_id=712660388876910633&scope=bot&permissions=-1), [Voter ${bot.user.username}](https://bots.discordlabs.org/bot/712660388876910633), [Serveur de Support](https://discord.gg/E8UtNnj)`)
         .setThumbnail(bot.user.displayAvatarURL())
         .setImage("https://images7.alphacoders.com/973/thumb-1920-973246.jpg") 
          message.channel.send(embed)
          msg.delete();
        } else if (reaction.emoji.name === '??????') {
          async function helpfunction() {
            const welcomeembed = new Discord.MessageEmbed()
            .setTitle("Menu d'aide")
            .setDescription(`Coucou je suis ${bot.user.username}, un bot Multifonction totalement repens?? ?? votre confort.\nMon pr??fix est \`\`${prefix}\`\`.\nJe poss??de un total de **${numberofcommands}** commandes\nFaites \`\`${prefix}help <nom de la commande>\`\` pour afficher plus d'infos sur une commande.\nVeuillez choisir l'une de mes diff??rentes fonctions pour avoir les commandes dans cette derni??re:\n\n???? Fonction Administration\n?????? Fonction Aventure\n?????? Fonction Configuration\n???? Fonction Fun\n??????? Fonction Images\n??????? Fonction Informations\n???? Fonction Mod??ration\n???? Fonction NSFW\n???? Fonction Owner\n???? Fonction Social\n??? Fonction Utilit??`) 
            .addField("\u200B", `[Inviter ${bot.user.username}](https://discord.com/oauth2/authorize?client_id=712660388876910633&scope=bot&permissions=-1), [Voter ${bot.user.username}](https://bots.discordlabs.org/bot/712660388876910633), [Serveur de Support](https://discord.gg/E8UtNnj)`)
            .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
            let wemsg = await message.channel.send(welcomeembed)
            msg.delete()
            await wemsg.react("????")
            await wemsg.react("??????")
            await wemsg.react("??????")
            await wemsg.react("????")
            await wemsg.react("???????")
            await wemsg.react("???????")
            await wemsg.react("????")
            await wemsg.react("????")
            await wemsg.react("????")
            await wemsg.react("????")
            await wemsg.react("???")
            await wemsg.react("???")
            const filter5 = (reaction, user) => {
              return ['????', '??????', '??????', '???????', '???????', '????', '????', '????', '????', '???', '???'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            
            wemsg.awaitReactions(filter5, { max: 1, time: 60000, errors: ['time'] })
              .then(async collected => {
                const reaction = collected.first();
            
                if (reaction.emoji.name === '????') {
                  const adminembed = new Discord.MessageEmbed()
                  .setTitle("???? Fonction Administration ????")
                  .setDescription(`Cette fonction permet de modifier le serveur au niveau de plusieurs param??tres!\nCette fonction poss??de **${admincommands.length}** commandes! Les voici:`)
                  .addField("\u200B", admincommands.map(c => `\`${c}\``).join(","))
                  let adminmsg = await message.channel.send(adminembed)
                  wemsg.delete()
                  await adminmsg.react("???")
                  await adminmsg.react("???")
                  const filteradmin = (reaction, user) => {
                    return ['???', '???'].includes(reaction.emoji.name) && user.id === message.author.id;
                  };
                  
                  adminmsg.awaitReactions(filteradmin, { max: 1, time: 60000, errors: ['time'] })
                    .then(async collected => {
                      const reaction = collected.first();
                  
                      if (reaction.emoji.name === '???') {
                        await adminmsg.delete()
                        helpfunction()
                      } else if (reaction.emoji.name === '???') {
                        adminmsg.delete()
                        message.delete()
                      }
                    })
                } else if (reaction.emoji.name === '??????') {
                  const aventureembed = new Discord.MessageEmbed()
                  .setTitle("?????? Fonction Aventure ??????")
                  .setDescription(`Cette fonction vous fait rentrer dans un grand syst??me roleplay avec plein d'??quipements et de fun!\nCette fonction poss??de **${adventurecommands.length}** commandes! Les voici:`)
                  .addField("\u200B", adventurecommands.map(c => `\`${c}\``).join(","))
                  let aventmsg = await message.channel.send(aventureembed)
                  wemsg.delete()
                  await aventmsg.react("???")
                  await aventmsg.react("???")
                  const filteravent = (reaction, user) => {
                    return ['???', '???'].includes(reaction.emoji.name) && user.id === message.author.id;
                  };
                  
                  aventmsg.awaitReactions(filteravent, { max: 1, time: 60000, errors: ['time'] })
                    .then(async collected => {
                      const reaction = collected.first();
                  
                      if (reaction.emoji.name === '???') {
                        await aventmsg.delete()
                        helpfunction()
                      } else if (reaction.emoji.name === '???') {
                        aventmsg.delete()
                        message.delete()
                      }
                    })
                } else if (reaction.emoji.name === '??????') {
                  const configembed = new Discord.MessageEmbed()
                  .setTitle("?????? Fonction Configuration ??????")
                  .setDescription(`Cette fonction permet de configurer certains param??tres afin de rendre votre serveur plus ??quip??!\nCette fonction poss??de **${configcommands.length}** commandes! Les voici:`)
                  .addField("\u200B", configcommands.map(c => `\`${c}\``).join(","))
                  let configmsg = await message.channel.send(configembed)
                  wemsg.delete()
                  await configmsg.react("???")
                  await configmsg.react("???")
                  const filterconfig = (reaction, user) => {
                    return ['???', '???'].includes(reaction.emoji.name) && user.id === message.author.id;
                  };
                  
                  configmsg.awaitReactions(filterconfig, { max: 1, time: 60000, errors: ['time'] })
                    .then(async collected => {
                      const reaction = collected.first();
                  
                      if (reaction.emoji.name === '???') {
                        await configmsg.delete()
                        helpfunction()
                      } else if (reaction.emoji.name === '???') {
                        configmsg.delete()
                        message.delete()
                      }
                    })
                } else if (reaction.emoji.name === '????') {
                  const funembed = new Discord.MessageEmbed()
                  .setTitle("???? Fonction Fun ????")
                  .setDescription(`Cette fonction amuse les utilisateurs avec les diff??rents jeux y contenant!\nCette fonction poss??de **${funcommands.length}** commandes! Les voici:`)
                  .addField("\u200B", funcommands.map(c => `\`${c}\``).join(","))
                  let funmsg = await message.channel.send(funembed)
                  wemsg.delete()
                  await funmsg.react("???")
                  await funmsg.react("???")
                  const filterfun = (reaction, user) => {
                    return ['???', '???'].includes(reaction.emoji.name) && user.id === message.author.id;
                  };
                  
                  funmsg.awaitReactions(filterfun, { max: 1, time: 60000, errors: ['time'] })
                    .then(async collected => {
                      const reaction = collected.first();
                  
                      if (reaction.emoji.name === '???') {
                        await funmsg.delete()
                        helpfunction()
                      } else if (reaction.emoji.name === '???') {
                        funmsg.delete()
                        message.delete()
                      }
                    })
                } else if (reaction.emoji.name === '???????') {
                  const imgembed = new Discord.MessageEmbed()
                  .setTitle("??????? Fonction Images ???????")
                  .setDescription(`Cette fonction g??n??re des images afin d'animer un peu un serveur!\nCette fonction poss??de **${imgcommands.length}** commandes! Les voici:`)
                  .addField("\u200B", imgcommands.map(c => `\`${c}\``).join(","))
                  let imgmsg = await message.channel.send(imgembed)
                  wemsg.delete()
                  await imgmsg.react("???")
                  await imgmsg.react("???")
                  const filterimg = (reaction, user) => {
                    return ['???', '???'].includes(reaction.emoji.name) && user.id === message.author.id;
                  };
                  
                  imgmsg.awaitReactions(filterimg, { max: 1, time: 60000, errors: ['time'] })
                    .then(async collected => {
                      const reaction = collected.first();
                  
                      if (reaction.emoji.name === '???') {
                        await imgmsg.delete()
                        helpfunction()
                      } else if (reaction.emoji.name === '???') {
                        imgmsg.delete()
                        message.delete()
                      }
                    })
                } else if (reaction.emoji.name === '???????') {
                  const infoembed = new Discord.MessageEmbed()
                  .setTitle("??????? Fonction Informations ???????")
                  .setDescription(`Cette fonction poss??de des informations sur le bot et des statistiques pour diff??rentes options!\nCette fonction poss??de **${infocommands.length}** commandes! Les voici:`)
                  .addField("\u200B", infocommands.map(c => `\`${c}\``).join(","))
                  let infomsg = await message.channel.send(infoembed)
                  wemsg.delete()
                  await infomsg.react("???")
                  await infomsg.react("???")
                  const filterinfo = (reaction, user) => {
                    return ['???', '???'].includes(reaction.emoji.name) && user.id === message.author.id;
                  };
                  
                  infomsg.awaitReactions(filterinfo, { max: 1, time: 60000, errors: ['time'] })
                    .then(async collected => {
                      const reaction = collected.first();
                  
                      if (reaction.emoji.name === '???') {
                        await infomsg.delete()
                        helpfunction()
                      } else if (reaction.emoji.name === '???') {
                        infomsg.delete()
                        message.delete()
                      }
                    })
                } else if (reaction.emoji.name === '????') {
                  const modembed = new Discord.MessageEmbed()
                  .setTitle("???? Fonction Mod??ration ????")
                  .setDescription(`Cette fonction permet de mod??rer un serveur en toute simplicit?? et avec une grande efficacit??!\nCette fonction poss??de **${modcommands.length}** commandes! Les voici:`)
                  .addField("\u200B", modcommands.map(c => `\`${c}\``).join(","))
                  let modmsg = await message.channel.send(modembed)
                  wemsg.delete()
                  await modmsg.react("???")
                  await modmsg.react("???")
                  const filtermod = (reaction, user) => {
                    return ['???', '???'].includes(reaction.emoji.name) && user.id === message.author.id;
                  };
                  
                  modmsg.awaitReactions(filtermod, { max: 1, time: 60000, errors: ['time'] })
                    .then(async collected => {
                      const reaction = collected.first();
                  
                      if (reaction.emoji.name === '???') {
                        await modmsg.delete()
                        helpfunction()
                      } else if (reaction.emoji.name === '???') {
                        modmsg.delete()
                        message.delete()
                      }
                    })
                } else if (reaction.emoji.name === '????') {
                  if(!message.channel.nsfw) {
                    message.delete()
                    wemsg.delete()
                    return message.channel.send("<a:warning:737605020324986900> ${message.author.username}, cette fonction n'est visible que dans un salon NSFW!")
                  }
                  const nsfwembed = new Discord.MessageEmbed()
                  .setTitle("???? Fonction NSFW ????")
                  .setDescription(`Cette fonction cache du contenu pornographique et ne peut ??tre utilis??e que dans un salon NSFW!\nCette fonction poss??de **${nsfwcommands.length}** commandes! Les voici:`)
                  .addField("\u200B", nsfwcommands.map(c => `\`${c}\``).join(","))
                  let nsfwmsg = await message.channel.send(nsfwembed)
                  wemsg.delete()
                  await nsfwmsg.react("???")
                  await nsfwmsg.react("???")
                  const filternsfw = (reaction, user) => {
                    return ['???', '???'].includes(reaction.emoji.name) && user.id === message.author.id;
                  };
                  
                  nsfwmsg.awaitReactions(filternsfw, { max: 1, time: 60000, errors: ['time'] })
                    .then(async collected => {
                      const reaction = collected.first();
                  
                      if (reaction.emoji.name === '???') {
                        await nsfwmsg.delete()
                        helpfunction()
                      } else if (reaction.emoji.name === '???') {
                        nsfwmsg.delete()
                        message.delete()
                      }
                    })
                } else if (reaction.emoji.name === '????') {
                  const ownerembed = new Discord.MessageEmbed()
                  .setTitle("???? Fonction Owner ????")
                  .setDescription(`Cette fonction ne peut ??tre utilis??e que par le d??veloppeur du bot et lui permet d'avoir un acc??s total au bot!\nCette fonction poss??de **${ownercommands.length}** commandes! Les voici:`)
                  .addField("\u200B", ownercommands.map(c => `\`${c}\``).join(","))
                  let ownermsg = await message.channel.send(ownerembed)
                  wemsg.delete()
                  await ownermsg.react("???")
                  await ownermsg.react("???")
                  const filterowner = (reaction, user) => {
                    return ['???', '???'].includes(reaction.emoji.name) && user.id === message.author.id;
                  };
                  
                  ownermsg.awaitReactions(filterowner, { max: 1, time: 60000, errors: ['time'] })
                    .then(async collected => {
                      const reaction = collected.first();
                  
                      if (reaction.emoji.name === '???') {
                        await ownermsg.delete()
                        helpfunction()
                      } else if (reaction.emoji.name === '???') {
                        ownermsg.delete()
                        message.delete()
                      }
                    })
                } else if (reaction.emoji.name === '????') {
                  const socialembed = new Discord.MessageEmbed()
                  .setTitle("???? Fonction Social ????")
                  .setDescription(`Cette fonction permet d'interagir entre sentiments et utilisateurs!\nCette fonction poss??de **${socialcommands.length}** commandes! Les voici:`)
                  .addField("\u200B", socialcommands.map(c => `\`${c}\``).join(","))
                  let socialmsg = await message.channel.send(socialembed)
                  wemsg.delete()
                  await socialmsg.react("???")
                  await socialmsg.react("???")
                  const filtersocial = (reaction, user) => {
                    return ['???', '???'].includes(reaction.emoji.name) && user.id === message.author.id;
                  };
                  
                  socialmsg.awaitReactions(filtersocial, { max: 1, time: 60000, errors: ['time'] })
                    .then(async collected => {
                      const reaction = collected.first();
                  
                      if (reaction.emoji.name === '???') {
                        await socialmsg.delete()
                        helpfunction()
                      } else if (reaction.emoji.name === '???') {
                        socialmsg.delete()
                        message.delete()
                      }
                    })
                } else if (reaction.emoji.name === '???') {
                  const utilembed = new Discord.MessageEmbed()
                  .setTitle("??? Fonction Utilit?? ???")
                  .setDescription(`Cette fonction poss??de des commandes et syst??mes tr??s utile!\nCette fonction poss??de **${utilcommands.length}** commandes! Les voici:`)
                  .addField("\u200B", utilcommands.map(c => `\`${c}\``).join(","))
                  let utilmsg = await message.channel.send(utilembed)
                  wemsg.delete()
                  await utilmsg.react("???")
                  await utilmsg.react("???")
                  const filterutil = (reaction, user) => {
                    return ['???', '???'].includes(reaction.emoji.name) && user.id === message.author.id;
                  };
                  
                  utilmsg.awaitReactions(filterutil, { max: 1, time: 60000, errors: ['time'] })
                    .then(async collected => {
                      const reaction = collected.first();
                  
                      if (reaction.emoji.name === '???') {
                        await utilmsg.delete()
                        helpfunction()
                      } else if (reaction.emoji.name === '???') {
                        utilmsg.delete()
                        message.delete()
                      }
                    })
                } else if (reaction.emoji.name === '???') {
                  wemsg.delete()
                  message.delete()
                }
              })
          }
          helpfunction()
        } else if (reaction.emoji.name === '???') {
          message.delete()
          msg.delete()
          }else {
          
          const embed1 = new Discord.MessageEmbed()
          .setTitle("Menu d'aide")
          .setDescription(`Coucou je suis ${bot.user.username}, un bot Multifonction totalement repens?? ?? votre confort.\nJe poss??de un total de \`${numberofcommands}\` commandes.\nMon pr??fix est \`${prefix}\`.\nFaites \`${prefix}help <nom de la commande>\` pour afficher plus d'infos sur une commande.\nVous pouvez utiliser les r??actions ????????? et ????????? pour changer de page du menu!\nVous pouvez utiliser la r??action ??? pour arr??ter d'interagir avec le menu!\nAu bout de 2 minutes, il sera impossible d'interagir avec le menu!`)
          .setImage("https://cdn.discordapp.com/attachments/714096850256527361/746078845035085914/${bot.user.username}_banner.jpg")
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      
          const embed2 = new Discord.MessageEmbed()
          .setTitle(`???? <:doublefleche:773257544570765312> Administration \`[${admincommands.length}]\``)
          .setDescription(admincommands.map(c => `\`${c}\``).join(`\n`))
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      
          const embed3 = new Discord.MessageEmbed()
          .setTitle(`?????? <:doublefleche:773257544570765312> Aventure \`[${adventurecommands.length}]\``)
          .setDescription(adventurecommands.map(c => `\`${c}\``).join(`\n`))
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      
          const embed4 = new Discord.MessageEmbed()
          .setTitle(`?????? <:doublefleche:773257544570765312> Configuration \`[${configcommands.length}]\``)
          .setDescription(configcommands.map(c => `\`${c}\``).join(`\n`))
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      
          const embed6 = new Discord.MessageEmbed()
          .setTitle(`???? <:doublefleche:773257544570765312> Fun \`[${funcommands.length}]\``)
          .setDescription(funcommands.map(c => `\`${c}\``).join(`\n`))
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      
          const embed7 = new Discord.MessageEmbed()
          .setTitle(`??????? <:doublefleche:773257544570765312> Images \`[${imgcommands.length}]\``)
          .setDescription(imgcommands.map(c => `\`${c}\``).join(`\n`))
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      
          const embed8 = new Discord.MessageEmbed()
          .setTitle(`??????? <:doublefleche:773257544570765312> Informations \`[${infocommands.length}]\``)
          .setDescription(infocommands.map(c => `\`${c}\``).join(`\n`))
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      
          const embed9 = new Discord.MessageEmbed()
          .setTitle(`???? <:doublefleche:773257544570765312> Mod??ration \`[${modcommands.length}]\``)
          .setDescription(modcommands.map(c => `\`${c}\``).join(`\n`))
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      
          const embed10 = new Discord.MessageEmbed()
          .setTitle(`???? <:doublefleche:773257544570765312> NSFW \`[${nsfwcommands.length}]\``)
          .setDescription(nsfwcommands.map(c => `\`${c}\``).join(`\n`))
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      
          const embed11 = new Discord.MessageEmbed()
          .setTitle(`???? <:doublefleche:773257544570765312> Owner \`[${ownercommands.length}]\``)
          .setDescription(ownercommands.map(c => `\`${c}\``).join(`\n`))
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      
          const embed12 = new Discord.MessageEmbed()
          .setTitle(`???? <:doublefleche:773257544570765312> Social \`[${socialcommands.length}]\``)
          .setDescription(socialcommands.map(c => `\`${c}\``).join(`\n`))
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      
          const embed13 = new Discord.MessageEmbed()
          .setTitle(`??? <:doublefleche:773257544570765312> Utilit?? \`[${utilcommands.length}]\``)
          .setDescription(utilcommands.map(c => `\`${c}\``).join(`\n`))
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))

          const embed14 = new Discord.MessageEmbed()
          .setTitle(`<:discordlabsicon:621472531735642130> <:doublefleche:773257544570765312> Liens utiles \`[3]\``)
          .setDescription("[Inviter ${bot.user.username}](https://discord.com/oauth2/authorize?client_id=712660388876910633&scope=bot&permissions=-1)\n[Voter ${bot.user.username}](https://bots.discordlabs.org/bot/712660388876910633)\n[Serveur de Support](https://discord.gg/E8UtNnj)")
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      
          let embeds = [
              embed1,
              embed2,
              embed3,
              embed4,
              embed6,
              embed7,
              embed8,
              embed9,
              embed10,
              embed11,
              embed12,
              embed13,
              embed14
          ]
      
          const emojis = ["??????", "??????"]
      
          Pagination(message, embeds, emojis).then(async mymsg => {
          await mymsg.react("???") 
          const filter2 = (reaction, user) => {
            return ["???"].includes(reaction.emoji.name) && user.id === message.author.id;
          }
          try {
          mymsg.awaitReactions(filter2, { max: 1, time: 120000, errors: ['time'] })
          .then(collected => {
            const reaction = collected.first();
        
            if (reaction.emoji.name === '???') {
              mymsg.reactions.removeAll().catch(error => console.log(`Une erreur est survenue lors de la suppresion des r??actions: ${error}`))
            }
          })
        } catch(e) {
          mymsg.reactions.removeAll().catch(error => console.log(`Une erreur est survenue lors de la suppresion des r??actions: ${error}`))
        }
        })
        msg.delete()
        }
      })


}else{
  try{
  const command = bot.commands.get(args[0]) || bot.commands.find(cmd => cmd.help.alias).get(args[0]) || bot.commands.find(cmd => cmd.help.alias2).get(args[0]) || bot.commands.find(cmd => cmd.help.alias3).get(args[0])

  if(!command)  return message.reply(`je ne poss??de pas la commande \`${args[0]}\` !`)
  let cdHours = Math.floor(command.help.cooldown / 60 / 60)
  let cdMinutes = Math.floor((command.help.cooldown / 60) - (cdHours * 60))
  let cdSeconds = Math.floor(command.help.cooldown - ((cdHours * 60 * 60) + (cdMinutes * 60)))
  let temps = ""
  if(cdHours !== 0) temps += `${cdHours} ${cdHours > 1 ? "heures" : "heure"} `
  if(cdMinutes !== 0) temps += `${cdMinutes} ${cdMinutes > 1 ? "minutes" : "minute"} `
  if(cdHours == 0 && cdMinutes == 0 && cdSeconds == 0) cdSeconds = 1
  if(cdSeconds !== 0) { 
    if(cdHours !== 0 && cdMinutes !== 0) temps += `et ${cdSeconds} ${cdSeconds > 1 ? "secondes" : "seconde"} `
    else temps += `${cdSeconds} ${cdSeconds > 1 ? "secondes" : "seconde"} `
  }
let aliases = ""
  if(command.help.alias) aliases += `${prefix}${command.help.alias}`
if(command.help.alias2) aliases += `\n${prefix}${command.help.alias2}`
if(command.help.alias3) aliases += `\n${prefix}${command.help.alias3}`

const embed2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`Aide avanc??e pour la commande ${command.help.name}`)
.setDescription(`**Description:** ${command.help.description}\n**Rappel:** Les crochets tels que <> et []  ne sont pas utilis??s dans la commande.\n**Rappel #2:** [] = obligatoire\n<> = optionnel`)
.addField("Utilisation",  `${prefix}${command.help.usage}`)
.addField("Cat??gorie", command.help.category)
if(aliases) embed2.addField("Aliases", aliases)
if(command.help.example) embed2.addField("Exemple",`${prefix}${command.help.example}`) 
embed2.addField("Cooldown", temps)
return message.channel.send(embed2)
} catch(e) {
  return message.reply(`je ne poss??de pas la commande \`${args[0]}\` !`)
}}
}

module.exports.help = {
  name: "help",
  alias: "h",
  description: "Affiche une liste de commandes ou une aide avanc??e pour une commande sp??cifique.",
  usage: `help <nom d'une commande>`,
  example: "help ping",
  category: "utilit??",
  cooldown: 3
}