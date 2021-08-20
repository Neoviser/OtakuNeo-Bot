const Discord = require("discord.js"); //npm i discord.js
const superagent = require("superagent"); //npm i superagent

module.exports = {
  name: "waifu",
  description: "hey a waifu!!!",
  cooldown: 5,
  execute(message, args, client) {
    const { body } = await superagent.get(
      "https://nekos.life/api/v2/img/waifu"
    ); // where the bot is well searching for

    const embed = new Discord.MessageEmbed()
      .setColor("#ff9900")
      .setImage(body.url) // to show random waifu
      .setFooter(
        `Requested By: ${message.author.tag}`,
        `${message.author.displayAvatarURL()}`
      )
      .setTimestamp();
    message.channel.send({ embed });
  },
};
