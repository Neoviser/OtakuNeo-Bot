const Discord = require("discord.js");
const client = require("nekos.life");
const { nsfw } = new client();

module.exports = {
  name: "eroyuri",
  description: "huh.. yuri..",
  aliases: ["eroYuri"],
  cooldown: 5,

  async execute(message, args) {
    if (!message.channel.nsfw)
      return message.inlineReply(
        "Sorry~ You can only use this command in a **`NSFW`** channel!"
      );
    link = await nsfw.eroYuri();
    const embed = new Discord.MessageEmbed()
      .setColor("E985FF")
      .setTitle("Search Query: Ero Yuri")
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
