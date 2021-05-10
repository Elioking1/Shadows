const fs = require("fs")

const loadCommands = (bot, dir = "./commands/") => {
    fs.readdirSync(dir).forEach(dirs => {
    const commands = fs.readdirSync(`${dir}${dirs}/`).filter(files => files.endsWith(".js")); 
    
    for (const file of commands) {
    const getFileName = require(`../${dir}${dirs}/${file}`); 
    bot.commands.set(getFileName.help.name, getFileName);
    bot.commands.set(getFileName.help.alias, getFileName);
    bot.commands.set(getFileName.help.alias2, getFileName);
    bot.commands.set(getFileName.help.alias3, getFileName);
    console.log(`✅ Commande: ${getFileName.help.name}`); 
    }; 
    }); 
    }; 

    const loadEvents = (bot, dir = "./events/") => {
        fs.readdirSync(dir).forEach(dirs => {
            const events = fs.readdirSync(`${dir}${dirs}/`).filter(files => files.endsWith(".js")); 
            for (const event of events) {
                const evt = require(`../${dir}${dirs}/${event}`); 
                const evtName = event.split(".")[0]
                bot.on(evtName, evt.bind(null, bot))
                console.log(`✅ Évenement: ${evtName}`); 
              delete require.cache[require.resolve(`../${dir}${dirs}/${event}`)];
            }
      })
      }

module.exports = {
    loadCommands,
    loadEvents
}