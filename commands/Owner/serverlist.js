const Discord = require("discord.js")
const config = require("../../config.json")

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== config.ownerID) return message.channel.send("Seulement mon owner peut utilisé cette commande!")
    await message.delete();

    let i0 = 0;
    let i1 = 10;
    let page = 1;

    let description = 
    `Serveurs: ${bot.guilds.cache.size}\n\n`+
    bot.guilds.cache.sort((a,b) => b.memberCount-a.memberCount).map((r) => r)
        .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} membres`)
        .slice(0, 10)
        .join("\n");

    const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setColor("RANDOM")
        .setFooter(bot.user.username)
        .setTitle(`Page: ${page}/${Math.ceil(bot.guilds.cache.size/10)}`)
        .setDescription(description);

    const msg = await message.channel.send(embed);
    
    await msg.react("⬅");
    await msg.react("➡");
    await msg.react("❌");

    const collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id);

    collector.on("collect", async(reaction) => {

        if(reaction._emoji.name === "⬅") {

            // Updates variables
            i0 = i0-10;
            i1 = i1-10;
            page = page-1;
            
            // if there is no guild to display, delete the message
            if(i0 < 0){
                return msg.delete();
            }
            if(!i0 || !i1){
                return msg.delete();
            }
            
            description = `Serveurs: ${bot.guilds.cache.size}\n\n`+
            bot.guilds.cache.sort((a,b) => b.memberCount-a.memberCount).map((r) => r)
                .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} membres`)
                .slice(i0, i1)
                .join("\n");

            // Update the embed with new informations
            embed.setTitle(`Page: ${page}/${Math.round(bot.guilds.cache.size/10)}`)
                .setDescription(description);
        
            // Edit the message 
            msg.edit(embed);
        
        }

        if(reaction._emoji.name === "➡"){

            // Updates variables
            i0 = i0+10;
            i1 = i1+10;
            page = page+1;

            // if there is no guild to display, delete the message
            if(i1 > bot.guilds.cache.size + 10){
                return msg.delete();
            }
            if(!i0 || !i1){
                return msg.delete();
            }

            description = `Serveurs: ${bot.guilds.cache.size}\n\n`+
            bot.guilds.cache.sort((a,b) => b.memberCount-a.memberCount).map((r) => r)
                .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} membres`)
                .slice(i0, i1)
                .join("\n");

            // Update the embed with new informations
            embed.setTitle(`Page: ${page}/${Math.round(bot.guilds.cache.size/10)}`)
                .setDescription(description);
        
            // Edit the message 
            msg.edit(embed);

        }

        if(reaction._emoji.name === "❌"){
            return msg.delete(); 
        }

        // Remove the reaction when the user react to the message
        await reaction.users.remove(message.author.id);

    });
}

module.exports.help = {
    name: "serverlist",
    alias: "sl",
    description: "Permet de voir tous les serveurs dans lesquels le bot se trouve.",
    usage: `serverlist`,
    category: "owner",
    cooldown: 10
}