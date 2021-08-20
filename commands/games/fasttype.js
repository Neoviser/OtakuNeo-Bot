module.exports = {
    name: 'fasttype',
    description: 'See how fast you can type!',
    coodlown: 15,

    execute: async (message) => {

        const {
            FastType
        } = require('weky')

        await FastType({
            message: message,
            embed: {
                title: 'FastType',
                description: 'You have **{{time}}** to type the below sentence.',
                color: '#bd48af',
                timestamp: true
            },
            sentence: 'This is a sentence!',
            winMessage: 'GG, you have a wpm of **{{wpm}}** and You made it in **{{time}}**.',
            loseMessage: 'Better luck next time!',
            cancelMessage: 'You ended the game!',
            time: 60000,
            buttonText: 'Cancel',
            othersMessage: 'Only <@{{author}}> can use the buttons!'
        });
    }
}