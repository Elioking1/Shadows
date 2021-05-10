const Discord = require("discord.js")
const config = require('./config.json')
const bot = new Discord.Client({ fetchAllMembers: true});
const load = require("./systems/loader")
const logs = require("discord-logs")
logs(bot)
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.cooldowns = new Discord.Collection();
bot.radio = new Map()
const blague = require("blague.xyz");
const joker = new blague.Client(config.blaguexyztoken, {
    defaultLang: "fr"
});

bot.joker = joker

  load.loadCommands(bot);
  load.loadEvents(bot);

bot.login(config.token)