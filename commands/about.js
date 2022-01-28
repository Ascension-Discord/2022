require('discord-reply');
const { Discord, message, member, MessageEmbed } = require('discord.js');
const JokeAPI = require('sv443-joke-api');
var fs = require('fs');

module.exports = {
    name: 'about',
    description: 'About the bot!',
    execute(message, args, async) {

        const aboutEmbed = new MessageEmbed()
	        .setColor('RANDOM')
	        .setTitle(`ABout Ascension!`)
	        .setDescription(`Ascension had started in 2019, but paused due to COVID-19, but is now back in active development!`)
	        .setDescription(`Proudly made by: Nolant108#0001`)
            .addFields(
		    { name: 'For support:', value: `https://discord.gg/nn3GKsC`, inline: true },
            { name: '\u200B', value: '\u200B' }
            )
	        .setTimestamp()

        message.reply(aboutEmbed).then(/* ... */).catch(console.error);

 }
};