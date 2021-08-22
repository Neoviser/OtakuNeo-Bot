const Discord = require("discord.js");
const client = require("nekos.life");
const { sfw } = new client();

module.exports = {
  name: "kemonomimi",
  description: "omg a kemonomimi waifu!",
  aliases: ["kemono"],
  cooldown: 5,

  async execute(message, args) {
    link = await sfw.kemonomimi();
    const embed = new Discord.MessageEmbed()
      .setColor("E985FF")
      .setTitle("Search Query: Kemonomimi")
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
