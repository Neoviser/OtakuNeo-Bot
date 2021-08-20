const {
	MessageEmbed
} = require('discord.js');
module.exports = {
	name: 'purge',
	description: 'Deletes a specific number of messages!',
	aliases: ['delete', 'prune', 'clear'],
	cooldown: 1,
	execute(message, args) {
		const user = message.author;
		const embed = new MessageEmbed()
			.setDescription(`${user}, you do not have the correct permissions`);

		if (!message.member.hasPermission('MANAGE_MESSAGES')) {
			return message.channel.send(embed).then(m => m.delete({
				timeout: 5000
			}));
		}
		if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send("``Please give me the MANAGE_MESSAGES permission to make me delete messages!``")

		const amount = args.join(' ');

		if (!amount) {
			const clearEmbed = new MessageEmbed()
				.setAuthor('How to Use "purge"')
				.setColor('WHITE')
				.setDescription('Purges the number of messages specified')
				.addFields({
					name: 'Usage:',
					value: 'purge <value>',
					inline: true
				}, ); {
				message.channel.send(clearEmbed).then(m => m.delete({
					timeout: 8000
				}));
			}
		}

		embed.setDescription('❌ Please input a valid number!');
		if (isNaN(amount) == true) {
			return message.channel.send(embed).then(m => m.delete({
				timeout: 5000
			}));
		}

		embed.setDescription('❌ Input a positive number!');
		if (amount < 0) {
			return message.channel.send(embed).then(m => m.delete({
				timeout: 5000
			}));
		}


		embed.setDescription('❌ I suggest clearing more than 0 messages!');
		if (amount == 0) {
			return message.channel.send(embed).then(m => m.delete({
				timeout: 5000
			}));
		}

		message.channel.messages.fetch({
			limit: amount
		}).then(messages => {
			message.channel.bulkDelete(messages);
		});
		embed.setDescription('✅ All your specified messages have been deleted!');
		embed.setTimestamp();
		message.channel.send(embed)
	},
};