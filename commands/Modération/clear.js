const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande!`)
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je n'ai pas les permissions suffisantes!")
let amount = args[0]; // Amount of messages which should be deleted

if (!amount) return message.reply('Veuillez donner le nombre de messages à supprimer!'); // Checks if the `amount` parameter is given
if (isNaN(amount)) return message.reply("Vous n'avez pas mis un nombre valide!"); // Checks if the `amount` parameter is a number. If not, the command throws an error
amount = Math.ceil(amount)

if (amount > 100) return message.reply('Vous ne pouvez pas supprimer plus de 100 messages à la fois!'); // Checks if the `amount` integer is bigger than 100
if (amount < 2) return message.reply('Vous pouvez supprimer minimum 2 messages!'); // Checks if the `amount` integer is smaller than 1

await message.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
    message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
)});
message.channel.send(`:white_check_mark: ${amount} messages supprimés avec succès!`)

}

module.exports.help = {
    name: "clear",
    alias: "purge",
    description: "Efface un certain nombre de messages.",
    usage: `clear [nombre]`,
    category: "modération",
    cooldown: 10
  }