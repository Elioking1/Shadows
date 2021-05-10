const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let argument = args.join(" ");
    if(!argument){
       return message.channel.send("Veuillez rédiger un texte pour laisser la vache le dire")
    }  
    let cowpart2 = `     \  (oO)\_______\n`
    let cowpart3 = `      (__)\       )\/\ \n`
    let cowpart4 = `          U  ||----w |\n`
    let cowsay = `< ${argument} >\n \   ^__^\n${cowpart2}${cowpart3}${cowpart4}             ||     ||`
    let tir = "```"
    message.channel.send(`**${message.author.username}**:\n${tir}${cowsay}${tir}`)
}

module.exports.help = {
    name: "cowsay",
    description: "Fait parler une vache.",
    usage: `cowsay [texte]`,
    example: "cowsay Shadows",
    category: "fun",
    cooldown: 3
}