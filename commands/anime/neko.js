const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "neko",
  description: "omg a neko!",
  cooldown: 5,

  async execute(message, args, client) {
    if (!message.channel.nsfw)
      return message.channel.send(
        "Sorry~ You can only use this command in a **`NSFW`** channel! If you want to bypass this, use =nekof"
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
    message.channel.send({ embed });
  },
};
