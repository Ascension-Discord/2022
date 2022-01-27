const Discord = require('discord.js');
const { MessageEmbed, commands } = require('discord.js');
const fs = require('fs');
const { fileURLToPath } = require('url');

//TODO REMOVE!! when going to prod
const TOKEN = '';

//The current bot prefix (01/27/22)
const prefix = '!';

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
    client.user.setActivity('Launching into space!', {
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
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 


});

//Bot Login
client.login(TOKEN);