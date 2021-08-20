const Discord = require("discord.js");
const {
  MessageEmbed
} = require("discord.js");
const DIG = require("discord-image-generation");

module.exports = {
  name: "triggered",
  description: "displays a user's avatar triggerd",
  cooldown: 5,

  execute: async (message, args) => {


    let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if (args[0]) {
      user = message.guild.members.cache.get(args[0]).user;
    } else {
      user = message.author;
    }

    let avatar = await user.displayAvatarURL({
      dynamic: false,
      format: "png"
    });
    let image = await new DIG.Triggered().getImage(avatar);
    let attach = new Discord.MessageAttachment(image, "triggered.gif");
    return message.channel.send(attach);
  }
};