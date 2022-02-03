require('discord-reply');
const { Discord, message, member, MessageEmbed } = require('discord.js');
const JokeAPI = require('sv443-joke-api');
var fs = require('fs');

module.exports = {
    name: 'ytt',
    description: 'Youtube Bot!',
    execute(message, args, async) {

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${config.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(invite =>{
            if(!invite.code) return message.reply(":x: Cannot start minigame")
            message.channel.send(`Click on the **__Link__** to start the GAME:\n> https://discord.com/invite/${invite.code}`)
        })

      
 }
};