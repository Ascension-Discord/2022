require('discord-reply');
const Discord = require('discord.js');
const { MessageEmbed, commands } = require('discord.js');
const fs = require('fs');
const { fileURLToPath } = require('url');
const config = require("./config.json");

//TODO REMOVE!! when going to prod
//The current bot prefix (01/27/22)

//Intents
const client = new Discord.Client({

    intents: [

        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_EMOJIS_AND_STICKERS",
        "DIRECT_MESSAGES",
        "GUILD_MESSAGE_REACTIONS"

    ]

})


//Ready State
client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}`)

    client.user.setStatus('online')
    client.user.setActivity( {
        name: '!help | Launching to Space with you!',
        type: "STREAMING",
        url: "https://www.twitch.tv/lofigurl"
    
    });
})


//Command Handler Creater
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 

//CMD Handler & Runner 
client.on('messageCreate', message =>{
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
 
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
     
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } 

    if(command === 'joke'){
        client.commands.get('joke').execute(message, args);
    } 

    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } 

    if(command === 'dog'){
        client.commands.get('dog').execute(message, args);
    } 

    if(command === 'cat'){
        client.commands.get('cat').execute(message, args);
    } 

    if(command === 'about'){
        client.commands.get('about').execute(message, args);
    } 

    if(command === 'furry'){
        client.commands.get('furry').execute(message, args);
    }

    if(command === 'ytt'){
        client.commands.get('ytt').execute(message, args);
    }
});

//Bot Login
client.login(config.token);