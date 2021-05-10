const figlet = require('figlet');

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send('Veuillez mettre un texte!');

    msg = args.join(" ");

    figlet.text(msg, function (err, data){
        if(err){
            message.channel.send('Une erreur s\'est produite!');
            console.dir(err);
        }
        if(data.length > 2000) return message.channel.send('Votre message est très long!')

        message.channel.send(`**${message.author.username}:**\n` + '```' + data + '```')
    })
}

module.exports.help = {
    name: "ascii",
    description: "Rédige votre texte en image ascii.",
    usage: `ascii`,
    example: "ascii Shadows",
    category: "fun",
    cooldown: 3
}