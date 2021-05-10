const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
    if(db.get(`bingo_${message.guild.id}`) == null) db.set(`bingo_${message.guild.id}`, false)
    let thenumber;
    if(db.get(`bingo_${message.guild.id}`)) return message.channel.send("Un bingo est déjà en cours sur ce serveur!")
    if(args[0]) {
        if(isNaN(args[0])) return message.channel.send("Veuillez mettre un nombre valide!")
        if(args[0] <= 5) return message.channel.send("Le nombre que vous avez mis est plus petit ou égal à 5, veuillez mettre un plus grand!")
        thenumber = args[0]
    } else {
        thenumber = 100
    }

    let number = Math.floor(Math.random() * Math.ceil(thenumber) + 1)


    message.channel.send(`Le bingo commence ! Trouvez le chiffre entre **1** et **${thenumber}** pour gagner.`).then(async m => {



        const filter = m => m.author.id !== bot.user.id
        const collector = await message.channel.createMessageCollector(filter, {
            time: 300000
        });

        collector.on("collect", async collected => {
            db.set(`bingo_${message.guild.id}`, true)
                let response = await collected.content.trim();
                response = parseInt(response);
                if (isNaN(response)) {
                    return message.channel.send("⚠ Ce n'est pas un nombre !").then(msg => {
                        msg.delete({
                            timeout: 2000
                        })
                    })
                }
                if (response == number) {
                    await collector.stop(
                        `👏GG ${collected.author.toString()}👏, Le nombre était: **${number}**`
                    );
                }
                if (response > number) {
                    message.channel.send("Le nombre est plus petit !")
                }
                if (response < number) {
                    message.channel.send("Le nombre est plus grand !")
                }
        })
        collector.on("end", async(collected, reason) => {
            if (reason && reason !== "time") {
                db.set(`bingo_${message.guild.id}`, false)
                return message.channel.send(reason);
            } else {
                db.set(`bingo_${message.guild.id}`, false)
                return message.channel.send(
                    `Personne a gagné le bingo! Le nombre était: **${number}** !`
                );
            }
        });
})
}

module.exports.help = {
    name: "bingo",
    description: "Joue au bingo.",
    usage: `bingo <nombre>`,
    category: "fun",
    cooldown: 15
}