const mapping = { 
' ': ' ', 
'0': '0️⃣', 
'1': '1️⃣', 
'2': '2️⃣', 
'3': '3️⃣', 
'4': '4️⃣', 
'5': '5️⃣', 
'6': '6️⃣', 
'7': '7️⃣', 
'8': '8️⃣', 
'9': '9️⃣', 
'!': '❕', 
'?': '❔', 
'#': '#️⃣', 
'*': '*️⃣' 
}; 
'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => { mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`; });

  module.exports.run = async (bot, message, args) => {
    if(args.length < 1) { 
        return message.channel.send('Veuillez rédiger un texte!'); 
        } 
        message.channel.send(`**${message.author.username}:** ` + args.join(' ').split('').map(c => mapping[c] || c).join(''));
  }

module.exports.help = {
    name: "regional",
    description: "Transforme votre texte en émoji regional.",
    usage: `regional [texte]`,
    example: "regional Salut",
    category: "fun",
    cooldown: 7
  }