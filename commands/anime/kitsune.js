const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
  name: "kitsune",
  description: "omg a foxgirl!",
  aliases: ["foxgirl"],
  cooldown: 5,

  async execute(message, args, client) {
    const { body } = await superagent.get(
      "https://nekos.life/api/v2/img/fox_girl"
    ); //lets see wut we went

    const embed = new Discord.MessageEmbed()
      .setColor("E985FF")
      .setTitle(`Search Query: Kitsune`)
      .setImage(body.url)
      .setFooter(
        `Requested By: ${message.author.tag}`,
        `${message.author.displayAvatarURL()}`
      );
    message.channel.send({ embed });
  },
};
