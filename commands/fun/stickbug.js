const { MessageAttachment } = require("discord.js"),
  fetch = require("node-fetch");

module.exports = {
  name: "stickbug",
  description: "makes an image turn into a stickbug",
  cooldown: 15,
  execute: async (message, args, client) => {
    let user = message.mentions.users.first() || message.author;
    let avatar = user.avatarURL({
      format: "png",
      dynamic: false,
      size: 1024,
    });

    message.inlineReply("Please wait while I encode this..!");
    try {
      const res = await fetch(
        encodeURI(
          `https://nekobot.xyz/api/imagegen?type=stickbug&url=${avatar}`
        )
      );
      const vid = (await res.json()).message;

      const attachment = new MessageAttachment(vid, `${user.tag}-stickbug.mp4`);
      message.inlineReply(attachment);
    } catch (err) {
      console.log(err);
    }
  },
};
