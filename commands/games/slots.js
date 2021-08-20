const {
    MessageEmbed
} = require('discord.js')
module.exports = {
    name: 'slots',
    description: 'slots command',
    aliases: ['slot'],
    cooldown: 5,
    async execute(message) {
        let slots = ["\\🍒", "\\🍓", "\\🍎"];
        let result1 = Math.floor((Math.random() * slots.length));
        let result2 = Math.floor((Math.random() * slots.length));
        let result3 = Math.floor((Math.random() * slots.length));
        let icon = message.author.displayAvatarURL();

        if (result1 === result2 && result1 === result3) {
            let embed = new MessageEmbed()
                .setThumbnail(icon)
                .setTitle('\\🎰 Slots \\🎰')
                .setDescription(`Machine: **|**${slots[result1]} **|** ${slots[result2]} **|** ${slots[result3]}**|**\nYou Won!!`)
                .setColor('GREEN');
            return message.channel.send(embed);

        } else {

            let embed2 = new MessageEmbed()
                .setThumbnail(icon)
                .setTitle('\\🎰 Slots \\🎰')
                .setDescription(`Machine: **|**${slots[result1]} **|** ${slots[result2]} **|** ${slots[result3]}**|**\nYou Lost!!`)
                .setColor('C70039');
            return message.channel.send(embed2);

        }
    }
}