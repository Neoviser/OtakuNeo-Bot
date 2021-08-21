const Discord = require("discord.js");
const client = require("nekos.life");
const { sfw } = new client();

module.exports = {
  name: "nekogif",
  description: "omg a nekogif!",
  cooldown: 5,

  async execute(message, args) {
    if (!message.channel.nsfw)
      return message.inlineReply(
        "Sorry~ You can only use this command in a **`NSFW`** channel! This command is a bit too suggestive to allow in normal channels."
      );
    link = await sfw.nekoGif();
    const embed = new Discord.MessageEmbed()
      .setColor("E985FF")
      .setTitle("Search Query: Neko (GIF)")
      .setImage(link.url)
      .setFooter(
        `Requested By: ${message.author.tag}`,
        `${message.author.displayAvatarURL()}`
      );
    message.inlineReply(embed);
  },
};
