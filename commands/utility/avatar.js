const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["pfp"],
  description: "Shows the profile picture of a user!",
  cooldown: 5,

  execute: async (message) => {
    const user = message.mentions.users.first() || message.member.user;

    let avatarembed = new Discord.MessageEmbed()
      .setTitle(`${user.tag} Avatar`)
      .setColor("RANDOM")
      .setDescription(
        `
Link as:
- [png](${user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 })})
- [jpg](${user.displayAvatarURL({ format: "jpg", dynamic: true, size: 1024 })})
- [webp](${user.displayAvatarURL({
          format: "webp",
          dynamic: true,
          size: 1024,
        })})
`
      )

      .setImage(
        user.displayAvatarURL({
          format: "png",
          dynamic: true,
          size: 1024,
        })
      )
      .setFooter(
        `Requested By: ${message.author.tag}`,
        `${message.author.displayAvatarURL()}`
      )
      .setTimestamp();

    return message.inlineReply(avatarembed);
  },
};
