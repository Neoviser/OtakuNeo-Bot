module.exports = {
    name: "would-you-rather",
    aliases: ['wouldyourather', 'wyr'],
    cooldown: 5,
    execute: async (message) => {

        const {
            WouldYouRather
        } = require('weky')

        await WouldYouRather({
            message: message,
            embed: {
                title: 'Would you rather...',
                color: '#bd48af',
                timestamp: true,
            },
            thinkMessage: 'I am thinking',
            othersMessage: 'Only <@{{author}}> can use the buttons!',
            buttons: {
                optionA: 'Option A',
                optionB: 'Option B'
            },
        });

    }
}