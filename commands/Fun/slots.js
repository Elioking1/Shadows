let fruits = [
    "π",
    "π",
    "π",
    "π",
    "π",
    "π",
    "π",
    "π",
    "π",
    "π",
    "π₯₯",
    "π₯",
    "π",
    "π₯",
    "π₯¦",
    "π₯",
    "π½",
    "π₯"
]
 
module.exports.run = async (bot, message, args) => {
    let fruit = fruits[Math.floor(Math.random() * fruits.length)]
    let fruit2 = fruits[Math.floor(Math.random() * fruits.length)]
    let fruit3 = fruits[Math.floor(Math.random() * fruits.length)]
    let fruit4 = fruits[Math.floor(Math.random() * fruits.length)]
    let fruit5 = fruits[Math.floor(Math.random() * fruits.length)]
    let fruit6 = fruits[Math.floor(Math.random() * fruits.length)]
    let fruit7= fruits[Math.floor(Math.random() * fruits.length)]
    let fruit8 = fruits[Math.floor(Math.random() * fruits.length)]
    let fruit9 = fruits[Math.floor(Math.random() * fruits.length)]
    
    let msg = await message.channel.send(`**${message.author.username},** c'est parti je tourne la manivelle:\n\n${fruit} | ${fruit2} | ${fruit3}\n${fruit4} | ${fruit5} | ${fruit6} <\n${fruit7} | ${fruit8} | ${fruit9}`)
    let result = ""
    if(fruit4 == fruit5 && fruit4 == fruit6) result = "Je te fΓ©licite, c'est rare de gagner Γ  ce jeu."
    else result = "Bien tentΓ©, mais c'est ratΓ©. Ne baisse pas les bras."
    msg.edit(`**${message.author.username},** c'est parti je tourne la manivelle:\n\n${fruit} | ${fruit2} | ${fruit3}\n${fruit4} | ${fruit5} | ${fruit6} <\n${fruit7} | ${fruit8} | ${fruit9}\n\n${result}`)
}
 
module.exports.help = {
    name: "slots",
    description: "Joue Γ  un jeu de roulette.",
    usage: `slots`,
    category: "fun",
    cooldown: 10
}