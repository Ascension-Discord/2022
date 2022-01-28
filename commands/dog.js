const { default: axios } = require('axios');
const { Discord, message, member } = require('discord.js');
const JokeAPI = require('sv443-joke-api');
var fs = require('fs');

module.exports = {
    name: 'dog',
    description: 'Random cat img display',
    execute(message, args, async) {


        axios
        .get('https://api.thedogapi.com/v1/images/search')
        .then((res) => {

            message.channel.send(res.data[0].url)

        })
 }
};