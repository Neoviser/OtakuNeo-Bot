const { MessageEmbed } = require("discord.js");
const client = require("nekos.life");
const { sfw } = new client();

module.exports = {
  name: "smug",
  description: "feelin smug!",
  cooldown: 5,
  async execute(message, args, client) {
    link = await sfw.smug();
    let embed = new MessageEmbed();
    embed.setColor("#FFDBE9");
    embed.setImage(link.url);
    embed.setFooter(
      "How smug of you!",
      "https://cdn.discordapp.com/avatars/791492694852763649/4798a3c6b31a4373e4d5e251f18692ec.webp?size=256"
    );
    embed.setDescription(`${message.author} **is feeling smug!**`);

    message.inlineReply(embed);
  },
};
