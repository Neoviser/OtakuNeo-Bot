const figlet = require('figlet');

module.exports = {
    name: 'ascii',
    description: 'Transform text to ASCII.',
    async execute(message, args) {
        if (!args[0]) return message.reply('say something to convert your text to ASCII!')
        const textToTurnASCII = args.join(" ");

        figlet.text(textToTurnASCII, (err, text) => {
            if (err) return msg.channel.send(err);
            message.channel.send(`\`\`\` ${text.trimRight()} \`\`\``);
        });
    }
};