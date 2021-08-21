const { MessageEmbed } = require("discord.js");
const client = require("nekos.life");
const { sfw } = new client();

module.exports = {
  name: "pat",
  description: "pat a user in anime!",
  cooldown: 5,
  async execute(message, args, client) {
    link = await sfw.pat();
    let embed = new MessageEmbed();
    embed.setColor("#FFDBE9");
    embed.setImage(link.url);
    embed.setFooter(
      "Aww.. How cute!",
      "https://cdn.discordapp.com/avatars/791492694852763649/4798a3c6b31a4373e4d5e251f18692ec.webp?size=256"
    );
    if (args[0]) {
      const taggedUser =
        message.mentions.users.first() || client.users.cache.get(args[0]);
      embed.setDescription(
        `${message.author} **gave** ${taggedUser} **a pat!** `
      );
    } else {
      return message.inlineReply("Sorry~ You need to specify a member to pat!");
    }
    message.inlineReply(embed);
  },
};
