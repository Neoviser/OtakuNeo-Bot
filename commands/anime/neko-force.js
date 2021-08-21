const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "nekof",
  description: "omg a neko for admins!",
  cooldown: 5,

  async execute(message, args, client) {
    if (!message.member.hasPermission("ADMINISTRATOR") || !message.guild.owner)
      return message.channel.send(
        "`Sorry~ You don't have the following permissions to do this action!`"
      );
    const { body } = await superagent.get("https://nekos.life/api/neko");
    link = body.neko;

    const embed = new Discord.MessageEmbed()
      .setColor("E985FF")
      .setTitle("Search Query: Neko ")
      .setImage(body.neko)
      .setFooter(
        `Requested By: ${message.author.tag}`,
        `${message.author.displayAvatarURL()}`
      );
    message.inlineReply(embed);
  },
};
