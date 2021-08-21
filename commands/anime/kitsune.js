const Discord = require("discord.js");
const client = require("nekos.life");
const { sfw } = new client();

module.exports = {
  name: "kitsune",
  description: "omg a foxgirl!",
  aliases: ["foxgirl"],
  cooldown: 5,

  async execute(message, args) {
    link = await sfw.foxGirl();
    const embed = new Discord.MessageEmbed()
      .setColor("E985FF")
      .setTitle("Search Query: Foxgirl")
      .setImage(link.url)
      .setFooter(
        `Requested By: ${message.author.tag}`,
        `${message.author.displayAvatarURL()}`
      );
    message.inlineReply(embed);
  },
};
