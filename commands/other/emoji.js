const Discord = require('discord.js')

module.exports = {
    name: 'emoji',
    aliases: ['enlarge'],
    cooldown: 5,

    execute: async (message, args) => {
        function getEmoji(message) {
            const emojiId = message.replace(/<a?:(.*?):+/g, '').replace(/>+/g, '');
            let imageUrl = `https://cdn.discordapp.com/emojis/${emojiId}`;
            let animated = true;
            if (message.indexOf('<a:') === 0) {
                imageUrl += '.gif';
            } else if (message.indexOf('<:') === 0) {
                imageUrl += '.png';
                animated = false;
            } else {
                throw Error("That is not an emoji");
            }

            return [animated, imageUrl, emojiId];
        }
        const emoji = args[0]
        if (!emoji) return message.channel.send('You must have to send an emoji')
        const embed = new Discord.MessageEmbed()
        try {
            const [animated, imageUrl] = getEmoji(emoji);
            embed.setImage(imageUrl);
            embed.setColor('BLUE')
            if (animated) {
                embed.setDescription(`[GIF](${imageUrl})`);
            } else {
                embed.setDescription(`[PNG](${imageUrl})`);
            }
        } catch {
            message.channel.send("**Something is not right....**");
        }
        message.channel.send(embed)
    }
}