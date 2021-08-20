const canvacord = require("canvacord");
const Discord = require("discord.js");
module.exports = {
  name: "darkyoutubecomment",
  aliases: ["darkytcomment", "dytc"],
  cooldown: 5,

  async execute(message, args) {
    let options = {
      username: message.author.username,
      content: args.join(" "),
      avatar: message.author.displayAvatarURL({
        dynamic: false,
        format: "png",
      }),
      dark: true,
    };
    if (!args[0])
      return message.reply(
        "please say something for you to be on the YouTube comment section!"
      );
    let image = await canvacord.Canvas.youtube(options);
    let attachment = new Discord.MessageAttachment(image, "comment.png");
    let newembed = new Discord.MessageEmbed()
      .attachFiles([attachment])
      .setImage("attachment://comment.png")
      .setFooter(
        `Requested By ${message.author.username}`,
        message.author.displayAvatarURL()
      );
    message.inlineReply(newembed);
  },
};
