const Discord = require ("discord.js");
const cooldown = new Set()
let questions = [
    {
        title: "Combien y a-t-il de saisons sur Fortnite?",
        options: ["10", "11", "12", "13"],
        correct: 4
    },
    {
        title: "Lors de la sortie du jeu Brawl Stars, combien y avait-il de brawlers avant la toute première mise à jour?",
        options: ["18","20","22","23"],
        correct: 3
    },
    {
        title: "Lequel parmi eux n'est pas un type de pokémon?",
        options: ["Feu","Sol","Air","Roche"],
        correct: 3
    },
    {
        title: "Quel est le jeu vidéo le plus vendu?",
        options: ["Fortnite","Minecraft","PUBG","Call of Duty"],
        correct: 2
    },
    {
        title: "Trouver l'intrus:",
        options: ["Koya","Mee6","Mudae","EnderBot"],
        correct: 2
    },
    {
        title: "Trouver l'intrus:",
        options: ["Pixel Gun 3D","Roblox","PUBG","Minecraft"],
        correct: 3
    },
    {
        title: "Trouver l'intrus:",
        options: ["Tiktok","Whatsapp","Youtube","Twitch"],
        correct: 2
    },
    {
        title: "Quel est le pays le plus peuplé?",
        options: ["Russie","Canada","Chine","États-Unis"],
        correct: 3
        },
        {
        title: "Quel Tiktokeur/euse est le/la plus populaire?",
        options: ["Addison Rae","Charli D'amelio","Spencer X","Zack King"],
        correct: 2
        },
        {
        title: "Quel montagne a la plus grande altitude?",
        options: ["Himalaya","Mont Blanc","Sannine","Mont Everest"],
        correct: 4
        },
        {
        title: "Quel est le premier homme à avoir marché sur la Lune?",
        options: ["Neil Amstrong","Jack Schmitt","Gene Cernan","Aucun d'entre eux"],
        correct: 1
        },
        {
        title: "Combien y a-t-il de rayurres dans le drapeau des États-Unis?",
        options: ["5","7","12","13"],
        correct: 4
        },
        {
        title: "Quel groupe sanguin est récessif (rare)?",
        options: ["A","B","O","AB"],
        correct: 3
        },
        {
            title: "Quel est le nom de la monnaie dans Roblox?", 
            options: ["Robux","Roblux","Robox","Robax"], 
            correct: 1
            }, 
            {
            title: "Comment s'appelle l'entreprise qui a créé le fameux jeu Brawl Stars?", 
            options: ["Epic Games","Gameloft","Supercell","Zynga"], 
            correct: 3
            }, 
            {
            title: "Quel est le premier animal qui a marché sur la Lune?", 
            options: ["Un singe","Un chien","Un chat","Un panda"], 
            correct: 2
            }, 
            {
            title: "Quel est le tout premier jeu vidéo au monde?", 
            options: ["OXO","Pong","Pac-Man","Mario"], 
            correct: 1
            }, 
            {
            title: "En quel année le tout premier jeu vidéo au monde est-il sorti?", 
            options: ["1952","1963","1979","1986"], 
            correct: 1
            }, 
            {
            title: "Quel est l'anime le plus regardé au monde?", 
            options: ["Fullmetal Alchemist","Dragon Ball Z","One Piece","Sword Art Online"], 
            correct: 2
            }, 
            {
            title: "Quel est la boisson la plus consommée au monde?", 
            options: ["Le café","La limonade","L'eau","Le thé"], 
            correct: 4
            }, 
            {
            title: "Quel est le virus le plus mortel au monde?", 
            options: ["Covid 19","La peste noir","mH5N1","Ebola"], 
            correct: 3
            }, 
            {
            title: "Qui est le créateur de Discord?", 
            options: ["Bob Dylan","Steve Harvey","Charlie Chaplin","Jason Citron"], 
            correct: 4
            }, 
            {
            title: "Combien y a-t-il d'employés dans l'équipe Discord?", 
            options: ["47","68","100","123"], 
            correct: 3
            }, 
            {
            title: "Combien y a-t-il de flèches au Backgammon?", 
            options: ["10","12","23","27"], 
            correct: 2
            }, 
            {
            title: "Comment s'appelle la femme du Joker?", 
            options: ["Harley Quinn","Poison Ivy","Wonder Woman","Giganta"], 
            correct: 1
            }, 
            {
            title: "Quel est le language informatique le plus utilisé au monde?", 
            options: ["Python","C++","Java","Javascript"], 
            correct: 4
            }, 
            {
            title: "Trouver l'intrus:", 
            options: ["Orange","Jaune","Bleu","Rouge"], 
            correct: 1
            },
            {
            title: "Trouver l'intrus:", 
            options: ["Katana","Kusarigama","Shuriken","Tekko-kagi"], 
            correct: 3
            }, 
            {
            title: "Trouver l'intrus:", 
            options: ["2","4","7","19"], 
            correct: 2
            },
            {
                title: "Trouver l'intrus:", 
                options: ["25","43","61","93"], 
                correct: 4
                }, 
                {
                title: "Trouver l'intrus:", 
                options: ["Chat","Cochon","Chauve-Souris","Hibou"], 
                correct: 2
                }, 
                {
                title: "Dans le jeu Clash of Clans, quelle troupe est la moins résistante?",
                options: ["Électro-dragon","Sapeur","Dragon","Géant"], 
                correct: 2
                }, 
                {
                title: "Trouver l'intrus:", 
                options: ["Football","Basketball","Natation","Hockey"], 
                correct: 3
                }, 
                {
                title: "Trouver l'intrus:", 
                options: ["Astre","Banane","Étoile","Soleil"], 
                correct: 1
                }, 
                {
                title: "Trouver l'intrus:", 
                options: ["Discord","PUBG","Netflix","Duolingo"], 
                correct: 3
                }, 
                {
                title: "Trouver l'intrus:", 
                options: ["C++","Javascript","Python","Ruby"], 
                correct: 1
                }, 
                {
                title: "Trouver l'intrus:", 
                options: ["Hexa","Homo","Hepta","Octo"], 
                correct: 2
                }, 
                {
                title: "Trouver l'intrus:", 
                options: ["Ciseaux","Crayon","Compas","Gomme"], 
                correct: 4
                },
]
 
module.exports.run = async (bot, message, args) => {
    let q = questions[Math.floor(Math.random() * questions.length)]
    let i = 0
    const embed = new Discord.MessageEmbed()
    .setTitle(q.title)
    .setDescription(q.options.map(opt=>{
        i++;
        return `${i} - ${opt}\n`
    }))
    .setColor("RANDOM")
    .setFooter("Répondez à cette question avec le numéro de la réponse correcte! Vous avez que 15 secondes!")
    message.channel.send(embed)
    try{
        let msgs = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, { time: 15000, max: 1, errors: ["Temps"]});
        if(parseInt(msgs.first().content) == q.correct) {
            return message.channel.send("GG, vous avez répondu correctement!")
        } else {
            return message.channel.send(`Désolé, vous avez mal répondu! La réponse était le numéro **${q.correct}**!`)
        }
    }catch(e){
        return message.channel.send("Vous n'avez pas répondu à la question à temps!")
    }
}

module.exports.help = {
    name: "quiz",
    alias: "qcm",
    description: "Joue à un quiz",
    usage: `quiz`,
    cooldown: 86400
}