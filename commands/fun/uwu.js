const uwuFaces = ["(・`ω´・)", ";;w;;", "owo", "UwU", ">w<", "^w^"];

const uwuifyText = uwuMessage =>{
    uwuMessage = uwuMessage.replace(/(?:r|l)/g, 'w');
    uwuMessage = uwuMessage.replace(/(?:R|L)/g, 'W');
    uwuMessage = uwuMessage.replace(/n([aeiou])/g, 'ny$1');
    uwuMessage = uwuMessage.replace(/N([aeiou])/g, 'Ny$1');
    uwuMessage = uwuMessage.replace(/N([AEIOU])/g, 'Ny$1');
    uwuMessage = uwuMessage.replace(/ove/g, 'uv');
    uwuMessage = uwuMessage.replace(/th/g, 'f');
    uwuMessage = uwuMessage.replace(/Th/g, 'f');
    uwuMessage = uwuMessage.replace(/\!+/g, ' ' + uwuFaces[Math.floor(Math.random() *  uwuFaces.length)] + " ");

    return uwuMessage;
};

const uwuface = uwuFaces[Math.floor(Math.random() * uwuFaces.length)];

module.exports = {
    name: 'uwu',
    description: 'Request to have you message uwuified!',
    cooldown: 5,
    execute(message, args){
        if (!args[0]) return message.reply('please say something to uwuify your message!')
        let uwumeMessage = args.join(' ');
        message.channel.send(`${uwuifyText(uwumeMessage)} ${uwuface}`);
    },
};