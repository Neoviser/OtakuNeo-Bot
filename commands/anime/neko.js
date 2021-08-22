const Discord = require("discord.js");
const client = require("nekos.life");
const { sfw } = new client();

module.exports = {
  name: "neko",
  description: "omg a neko!",
  cooldown: 5,

  async execute(message, args) {
    link = await sfw.neko();
    const embed = new Discord.MessageEmbed()
      .setColor("E985FF")
      .setTitle("Search Query: Neko ")
      .setImage(link.url)
      .setDescription(
        "powered by [nekos.life](https://www.npmjs.com/package/nekos.life)"
      )
      .setFooter(
        `Requested By: ${message.author.tag}`,
        `${message.author.displayAvatarURL()}`
      );
    message.inlineReply(embed);
  },
};
