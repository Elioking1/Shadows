const { get } = require('axios');

module.exports.run = async (bot, message, args) => {
    let argument = args.join("%20")
    if(!argument) return message.channel.send("Veuillez rédiger le message pour le changer en image message clyde!");

get(`https://ctk-api.herokuapp.com/clyde/${argument}`, {
  responseType: 'arraybuffer'
})
  .then((res) => {
    message.channel.send({
      files: [{
        attachment: res.data,
        name: 'clyde.png'
      }]
    })
  })
  .catch((error) => console.error(`Something went wrong. Error: ${error}`));
}

module.exports.help = {
    name: "clyde",
    description: "Transforme votre texte en image message clyde.",
    usage: `clyde [texte]`,
    example: "clyde Shadows le best",
    category: "images",
    cooldown: 7
}