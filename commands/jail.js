const { ThreadChannel } = require('discord.js');
const { Discord, message, member, permissions, roles, hasPermission, guild, me, cache } = require('discord.js');
var fs = require('fs');
const { threadId } = require('worker_threads');
const Discord = require('discord.js') // add this


module.exports = {
    name: 'jail',
    description: 'jails a person!',
    execute(message, permissions) {

     //   if (message.member.guild.me.hasPermission("MANAGE_WEBHOOKS", "ADMINISTRATOR"))
      //  return message.channel.send("I don't have the permissions to make webhooks, please contact an admin or change my permissions!")


    if (!message.member.permissions.has(command.UserPerms || [])) return message.channel.send(`You need \`${command.UserPerms || []}\` Permissions`) // Added this


        
    }
}