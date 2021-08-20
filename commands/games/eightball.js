module.exports = {
    name: '8ball',
    description: '8ball game',
    aliases: ['eightball'],
    cooldown: 5,
    execute(message, args) {

        const {
            MessageEmbed
        } = require('discord.js');
        const eightBall = require('../../functions/8ball');

        const askedQuestion = args.join(" ");

        if (!args[2]) {
            return message.channel.send('Please ask an actual question!')
        }

        const embed = new MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL())
            .setTitle("\\🎱 Ball Enchantress")
            .setDescription(`**Your Question:** ${askedQuestion}\n**My Calculation:** ${eightBall()}`)
            .setTimestamp()
            .setColor('PURPLE')
            .setFooter('RNG Based Selection')

        return message.channel.send(embed);
    }
}