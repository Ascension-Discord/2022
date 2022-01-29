const { FurryBot } = require('furry-wrapper') // CommonJS
const { default: axios } = require('axios');
const { Discord, message, member } = require('discord.js');
const JokeAPI = require('sv443-joke-api');
var fs = require('fs');

var options


module.exports = {
    name: 'furry',
    description: 'Random cat img display',
    execute(message, args, async) {


        FurryBot.furry(options).then(r => message.reply(r));
        

    }
};