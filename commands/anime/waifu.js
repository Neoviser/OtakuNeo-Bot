const Discord = require("discord.js");
const client = require("nekos.life");
const { sfw } = new client();

module.exports = {
  name: "waifu",
  description: "omg a waifu!",
  cooldown: 5,

  async execute(message, args) {
    link = await sfw.waifu();
    const embed = new Discord.MessageEmbed()
      .setColor("E985FF")
      .setTitle("Random Waifu!")
      .setDescription(
        "powered by [nekos.life](https://www.npmjs.com/package/nekos.life)"
      )
      .setImage(link.url)
      .setFooter(
        `Requested By: ${message.author.tag}`,
        `${message.author.displayAvatarURL()}`
      );
    message.inlineReply(embed);
  },
};
