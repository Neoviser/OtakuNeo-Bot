module.exports = {
    name: "calculator",
    aliases: [],
    cooldown: 10,
    execute: async (message) => {

    const { Calculator } = require('weky')
    await Calculator({
        message: message,
        embed: {
            title: 'Calculator',
            color: '#bd48af',
            timestamp: true
        },
        disabledQuery: 'Calculator is disabled!',
        invalidQuery: 'The provided equation is invalid!',
        othersMessage: 'Only <@{{author}}> can use the buttons!'
    });
    
    }
}