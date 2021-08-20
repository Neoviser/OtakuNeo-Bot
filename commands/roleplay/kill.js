const {
    MessageEmbed
} = require("discord.js")
module.exports = {
    name: 'kill',
    description: "kill a user in anime!",
    cooldown: 5,
    execute(message, args, client) {
        let gifs = [
            'https://media1.tenor.com/images/bb4b7a7559c709ffa26c5301150e07e4/tenor.gif?itemid=9955653',
            'https://media1.tenor.com/images/3fd96f4dcba48de453f2ab3acd657b53/tenor.gif?itemid=14358509',
            'https://media1.tenor.com/images/eb7fc71c616347e556ab2b4c813700d1/tenor.gif?itemid=5840101',
            'https://media1.tenor.com/images/1bc44bbf22bcd6a20e3728b48548c61f/tenor.gif?itemid=4819140',
            'https://media1.tenor.com/images/cbb1642c9aeb06b4055a9ce5bbdc908a/tenor.gif?itemid=5749160'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first() || client.users.cache.get(args[0]);
            embed.setDescription(`${message.author} **killed** ${taggedUser}**!** `)
        } else {
            return message.channel.send('Please specify a member to kill!')
        }
        message.channel.send(embed);

    }
};