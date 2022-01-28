const { Discord, message, member } = require('discord.js');
module.exports = {
    name: 'clear',
    description: 'Clears the chat for a specified number',
    async execute(message, args) {
    
  let messages = await message.channel.bulkDelete(args[0] || 10);
		let chat = await clearChat.createChat(messages);
		let embed = new Discord.MessageEmbed()
			.setTitle(`Cleared ${messages.size} Messages`)
			.setColor("#7289DA")
			.setThumbnail(message.guild.iconURL({dynamic:true}))
			.setDescription(`[View Cleared Messages Chat Online](${chat.url})`)
			.addField("Channel", message.channel, true)
			.addField("Chat History Code", chat.code, true)
		message.channel.send(embed);
		await message.delete();
        message.channel.send(`Your chats hve been deleted ${member.user.username}`);

    }
};