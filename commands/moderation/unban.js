const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "unban",
    description: "Unban Command With ID",
    aliases: [],
    cooldown: 1,
    execute(message, args) {
        let reason = args.slice(1).join(' ');
        if(!message.member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**, You do not have perms to unban someone`)}
            
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) {return message.channel.send(`**${message.author.username}**, I do not have the perms to unban someone`)}

        if (!reason) reason = 'No reason supplied';
        let userID = args[0]
        if (!userID) return message.channel.send(`You need to unban an ID!`)

            message.guild.fetchBans().then(bans=> {
            if(bans.size == 0) return 
            let bUser = bans.find(b => b.user.id == userID)
            if(bUser) {
            
            const unbanedembed = new MessageEmbed()
			.setColor('GREEN')
			.addField('Action:', 'Unban')
			.addField('Victim: ', `<@${userID}> - (ID: ${userID})`)
			.addField('Moderator: ', `\\👋 ${message.author}`)
			.addField('Reason: ', reason)
			.setFooter(`${message.guild.name}`)
            .setTimestamp();
            
        const channel = message.guild.channels.cache.find(c => c.name === 'server-logs');
        if (!channel) {return message.channel.send("Couldn't find a `#server-logs` channel").then(message.channel.send(unbanedembed).then(message.guild.members.unban(bUser.user)));} 
        else {
        channel.send(unbanedembed).then(message.guild.members.unban(bUser.user));}
    } else {
        message.channel.send(`Not A Valid ID`)
    }
      })
    }
}