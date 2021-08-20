const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'sudo',
    category: 'Fun',
    cooldown: 10,
    description: 'Make anyone say anything!',
    execute: async (message, args) => {
        if (!args[0]) return message.reply('Please mention someone to *impersonate* (not literally)')
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.reply(`Couldn't find this user!`)

        message.channel.createWebhook(member.user.username, {
            avatar: member.user.displayAvatarURL({
                dynamic: true
            })
        }).then(webhook => {
            webhook.send(args.slice(1).join(' '))
            setTimeout(() => {
                webhook.delete()
            }, 3000)
        })
    }
}