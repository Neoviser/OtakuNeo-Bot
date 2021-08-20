module.exports = {
    name: 'rps',
    description: 'rock paper scissors',
    aliases: ['rockpaperscissors'],
    cooldown: 5,
    async execute(message) {
        const {
            promptMessage
        } = require('../../functions/rps');
        const {
            MessageEmbed
        } = require('discord.js');

        const chooseArr = ["🗻", "📰", "✂"];
        const embed = new MessageEmbed()
            .setColor('PURPLE')
            .setDescription(`<@${message.author.id}> Pick Your Move!`);

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.reactions.removeAll();

        embed.setDescription("")
        embed.addField(result, `You - \\${reacted} vs Bot - \\${botChoice}`);
        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                return "\\😁 You won!";
            } else if (me === clientChosen) {
                return "\\😑 It's a Tie!";
            } else {
                return "\\😂 You Lost!";
            }
        }
    }
}