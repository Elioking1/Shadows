const Discord = require('discord.js');
const { get } = require('axios');

module.exports.run = async (bot, message, args) => {
    let qrcode = args.join("+");
    if(!qrcode) return message.channel.send("Veuillez rentrer un texte qui avec ce dernier génèra le QR Code!")

get(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrcode}`, {
  responseType: 'arraybuffer'
})
  .then((res) => {
    message.channel.send({
      files: [{
        attachment: res.data,
        name: 'qrcode.png'
      }]
    })
  })
  .catch((error) => console.error(`Something went wrong. Error: ${error}`));
}

module.exports.help = {
    name: "qrcode",
    description: "Génère un qrcode avec votre texte.",
    usage: `qrcode [texte]`,
    example: "qrcode Shadows",
    category: "images",
    cooldown: 7
}