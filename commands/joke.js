const { Discord, message, member } = require('discord.js');
var fs = require('fs');
const giveMeAJoke = require('discord-jokes');


module.exports =  {
    name: 'joke',
    description: 'Random joke display',
    execute(message, args, async) {


        giveMeAJoke.getRandomDadJoke(function(joke) {
            message.reply(`Here is your joke! \n\n` + joke);
          });
    
    
    }

};