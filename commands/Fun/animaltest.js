const answers = [
    "le chien",
    "le chat",
    "la panthère",
    "le lion",
    "le tigre",
    "le guépard",
    "la guêpe",
    "la fourmi",
    "l'abeille",
    "la moustique",
    "le pigeon",
    "le corbeau",
    "le vautour",
    "l'aigle",
    "le phoenix",
    "le faucon",
    "l'hibou",
    "la chouette",
    "le penguin",
    "le phoque",
    "le morse",
    "le chameau",
    "l'éléphant",
    "l'hippopotame",
    "le rhinocéros",
    "le crocodile",
    "l'alligator",
    "le poisson rouge",
    "le requin",
    "le calamar",
    "le poulpe",
    "l'ours",
    "le singe",
    "le koala",
    "le panda",
    "le lémurien",
    "la souris",
    "le rat",
    "le cerf",
    "le cochon",
    "la chèvre",
    "la vache",
    "le cheval",
    "le zèbre",
    "le mouton",
    "la girafe",
    "le lapin",
    "le blaireau",
    "la licorne",
    "le renard",
    "la tortue",
    "le serpent",
    "la baleine",
    "le dophin",
    "le dragon",
    "le coq",
    "la poule",
    "le dindon",
    "le castor",
    "le yack",
    "la gazelle"
]
 
module.exports.run = async (bot, message, args) => {

    let msg = await message.channel.send(`**${message.author.username}**, Test en cours....`)
    const answer = answers[Math.floor(Math.random() * answers.length)];

    setTimeout(() => {
        msg.edit(`**${message.author.username},** l'animal qui vous correspond le mieux est **${answer}**.`)
    }, 10000)
    
}
 
module.exports.help = {
    name: "animaltest",
    alias: "at",
    description: "Quel animal vous correspond le mieux?",
    usage: `animaltest`,
    category: "fun",
    cooldown: 10
}