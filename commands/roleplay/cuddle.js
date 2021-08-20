const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "cuddle",
  description: "cuddle a user in anime!",
  cooldown: 5,
  execute(message, args, client) {
    let gifs = [
      "https://media1.tenor.com/images/6e6b4714e4078946d84b4602992cc363/tenor.gif?itemid=6154171",
      "https://media1.tenor.com/images/9c055cf13ecd8255834775c0af48f2c3/tenor.gif?itemid=16361738",
      "https://media1.tenor.com/images/86e217b0915b3368d48eedeba0d8b68c/tenor.gif?itemid=13221036",
      "https://media1.tenor.com/images/d16a9affe8915e6413b0c1f1d380b2ee/tenor.gif?itemid=12669052",
      "https://media1.tenor.com/images/325e3807097acda1c7d08737ae89e7c3/tenor.gif?itemid=17252595",
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
        `${message.author} **gave** ${taggedUser} **a cuddle!** `
      );
    } else {
      return message.inlineReply("Please specify a member to cuddle!");
    }
    message.inlineReply(embed);
  },
};
