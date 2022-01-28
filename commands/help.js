const { Discord, message, member } = require('discord.js');
module.exports = {
    name: 'help',
    description: 'Display help for the cafe bot.',
    execute(message) {
        message.reply(`My Commands follow as such: 
        \n !help .......... The Help Command
        \n !dog  .......... Calls the Cute dogs!
        \n !cat  .......... Calls the Cute Cats!
        \n !joke .......... Want a joke?
        \n\n Need support or help? Go to our support server:  https://discord.gg/nn3GKsC`);
        //    message.channel.send(`@${member.user.username} , My Commands follow as such...`)
    }
};