const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "pat",
  description: "pat a user in anime!",
  cooldown: 5,
  execute(message, args, client) {
    let gifs = [
      "https://media1.tenor.com/images/da8f0e8dd1a7f7db5298bda9cc648a9a/tenor.gif?itemid=12018819",
      "https://media1.tenor.com/images/6151c42c94df654b1c7de2fdebaa6bd1/tenor.gif?itemid=16456868",
      "https://media1.tenor.com/images/f41b3974036070fd1c498acf17a3a42e/tenor.gif?itemid=14751753",
      "https://media1.tenor.com/images/d7c326bd43776f1e0df6f63956230eb4/tenor.gif?itemid=17187002",
      "https://media1.tenor.com/images/291ea37382e1d6cd33349c50a398b6b9/tenor.gif?itemid=10204936",
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

    const target = message.mentions.members.first();
    let embed = new MessageEmbed();
    embed.setColor("#FFDBE9");
    embed.setImage(pick);

    if (args[0]) {
      const taggedUser =
        message.mentions.users.first() || client.users.cache.get(args[0]);
      embed.setDescription(
        `${message.author} **gave** ${taggedUser} **a pat!** `
      );
    } else {
      return message.inlineReply("Please specify a member to pat!");
    }
    message.inlineReply(embed);
  },
};
