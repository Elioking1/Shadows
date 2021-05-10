module.exports.run = async (bot, message, args) => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(args[0]) {
        if(isNaN(args[0])) return message.channel.send("Le nombre de caractères donné n'est pas un nombre!")
    }
    let num = args[0] ? Math.ceil(args[0]) : 10
                if(num > 100) return message.channel.send("Vous ne pouvez pas mettre plus que 100 caractères!")
    async function msg2() {
        let msg2 = await message.channel.send("Vous souhaitez intégrer les symboles dans votre mot de passe?")
        await msg2.react("✅")
        await msg2.react("❌")
        const filter2 = (reaction, user) => {
            return ['✅','❌'].includes(reaction.emoji.name) && user.id === message.author.id;
          };
          
          msg2.awaitReactions(filter2, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
              const reaction = collected.first();
          
              if (reaction.emoji.name === '✅') {
                characters += "!@#$%^&()'/*~"
                msg2.delete()
                function makeid(length) {
                    var result           = '';
                    var charactersLength = characters.length;
                    for ( var i = 0; i < length; i++ ) {
                       result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                 }
                 message.channel.send(":mailbox_closed: Votre mot de passe vous a été envoyé en message privé!")
                 message.author.send(`Voici votre mot de passe avec ${num} caractères: ${makeid(num)}`);
              }
              else if (reaction.emoji.name === '❌') {
                  msg2.delete()
                  function makeid(length) {
                      var result           = '';
                      var charactersLength = characters.length;
                      for ( var i = 0; i < length; i++ ) {
                         result += characters.charAt(Math.floor(Math.random() * charactersLength));
                      }
                      return result;
                   }
                   message.channel.send(":mailbox_closed: Votre mot de passe vous a été envoyé en message privé!")
                   message.author.send(`Voici votre mot de passe avec ${num} caractères: ${makeid(num)}`);
              }
            })
    }
    let msg = await message.channel.send("Vous souhaitez intégrer les chiffres dans votre mot de passe?")
    await msg.react("✅")
    await msg.react("❌")
    const filter = (reaction, user) => {
        return ['✅','❌'].includes(reaction.emoji.name) && user.id === message.author.id;
      };
      
      msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
          const reaction = collected.first();
      
          if (reaction.emoji.name === '✅') {
            characters += "0123456789"
            msg.delete()
            msg2()
          }
          else if (reaction.emoji.name === '❌') {
              msg.delete()
              msg2()
          }
        })
}

module.exports.help = {
    name: "password",
    alias: "mdp",
    alias2: "motdepasse",
    description: "Génère un mot de passe avec le nombre de caractères donné. Par défault le nombre est 10.",
    usage: `password <nombre>`,
    cooldown: 5
}