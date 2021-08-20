module.exports = {
    name: 'mute',
    description: 'mute command',
    aliases: [],
    cooldown: 1,
    execute(message, args) {
        const Discord = require('discord.js')

        const sChannel = message.guild.channels.cache.find(c => c.name === 'server-logs');

        if (!message.member.hasPermission("MUTE_MEMBERS") || !message.guild.owner) return message.channel.send("``You don't have the following permissions to do this action.``");
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send("``I can't add the muted role to them.``");

        let mutee = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mutee) return message.channel.send("``You Need To Mute Someone``");

        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No reason given"

        const muterole = message.guild.roles.cache.find(r => r.name === "Muted")
        if (!muterole) {
            return message.reply(`Please create a "Muted" role for me!`)
        }

        mutee.roles.add(muterole.id).then(() => {
            message.delete()
            message.channel.send(`<@${mutee.user.id}> was successfully muted.`).then(m => m.delete({
                timeout: 10000
            }));;
        })

        const embed = new Discord.MessageEmbed()
            .setColor(`YELLOW`)
            .addField('Action:', 'Mute')
            .addField('Victim: ', `<@${mutee.user.id}> - (ID: ${mutee.user.id})`)
            .addField('Moderator: ', `\\😶 ${message.author}`)
            .addField('Reason: ', reason)
            .setFooter(`${message.guild.name}`)
            .setTimestamp();
        if (!sChannel) {
            return message.channel.send("Couldn't find a `#server-logs` channel").then(message.channel.send(embed));
        } else {
            sChannel.send(embed);
        }
    }
}