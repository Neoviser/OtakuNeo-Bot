module.exports = {
    name: 'unmute',
    description: 'unmute command',
    aliases: [],
    cooldown: 1,
    execute(message, args) {
        const sChannel = message.guild.channels.cache.find(c => c.name === 'server-logs');
        const Discord = require('discord.js')
        if(!message.member.hasPermission("KICK_MEMBERS") || !message.guild.owner) return message.channel.send("``You Dont Have Perms``");
        if(!message.guild.me.hasPermission(["MANAGE_ROLES"])) return message.channel.send("``I Cant Unmute He/She``")

        let mutee = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!mutee) return message.channel.send("``You Need To Unmute Someone``");

        let reason = args.slice(1).join(" ");
        if(!reason) reason = "No reason given"

        let muterole = message.guild.roles.cache.find(r => r.name === "Muted")
        if(!muterole) return message.channel.send("``There is no muted role for me to remove!``")

        const hasmutedrole = mutee.roles.cache.some(r => r.name === "Muted")
        if(hasmutedrole !== true) return message.channel.send("``That user isn't muted!``").then(m => m.delete({timeout: 10000}));;

mutee.roles.remove(muterole.id).then(() => {
    message.delete()
    message.channel.send(`<@${mutee.user.id}> was unmuted!`).then(m => m.delete({timeout: 10000}));;
})
const embed = new Discord.MessageEmbed()
.setColor(`GREEN`)
	.addField('Action:', 'Unmute')
	.addField('Victim: ', `<@${mutee.user.id}> - (ID: ${mutee.user.id})`)
	.addField('Moderator: ', `\\😀 ${message.author}`)
	.addField('Reason: ', reason)
	.setFooter(`${message.guild.name}`)
    .setTimestamp();
    if (!sChannel) {
        return message.channel.send("Couldn't find a `#server-logs` channel").then(message.channel.send(embed));} 
        else {
            sChannel.send(embed);
        }
    }
}