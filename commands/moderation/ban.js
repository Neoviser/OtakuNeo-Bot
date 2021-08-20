const {
	MessageEmbed
} = require('discord.js');
module.exports = {
	name: 'ban',
	description: 'Bans a user.',
	aliases: [],
	cooldown: 5,
	execute(message, args) {

		let reason = args.slice(1).join(' ');
		const userArray = message.content.split(' ');
		const userArgs = userArray.slice(1);
		const user = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(' ') || x.user.username === userArgs[0]) || message.member;


		const embed = new MessageEmbed()
			.setColor('581845')
			.setDescription('❌ You do not have the permissions to ban that user!');

		if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(embed);
		if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send("``❌ I Can't Ban People without correct permissions!``")

		embed.setDescription('❌ You must mention someone to ban them.');
		if (!user) return message.channel.send(embed).catch(console.error);

		embed.setDescription('❌ I can\'t let you do that, you cannot ban yourself.');
		if (user.id === message.author.id) return message.channel.send(embed);

		const targetUser = message.guild.members.cache.get(user.id);

		embed.setDescription('❌ Cannot ban that user because of their role.');
		if (!targetUser.kickable) return message.channel.send(embed);

		if (!reason) reason = 'No reason supplied';

		const banedembed = new MessageEmbed()
			.setColor(`RED`)
			.addField('Action:', 'Ban')
			.addField('Victim: ', `${user} - (ID: ${user.id})`)
			.addField('Moderator: ', `\\🔨 <@${message.author.id}>`)
			.addField('Reason: ', reason)
			.setFooter(`${message.guild.name}`)
			.setTimestamp();

		const channel = message.guild.channels.cache.find(c => c.name === 'server-logs');
		if (!channel) {
			return message.channel.send("Couldn't find a `#server-logs` channel").then(message.channel.send(banedembed).then(targetUser.ban({
				days: 7,
				reason: reason
			})))
		} else {
			channel.send(banedembed);
			targetUser.ban({
				days: 7,
				reason: reason
			});
		}
	},
};