module.exports = {
  name: "clyde",
  aliases: ["clydemessage"],
  cooldown: 5,

  async execute(message, args) {
    const axios = require("axios");
    const { MessageEmbed } = require("discord.js");
    if (!args[0]) return message.inlineReply("Hey.. Please provide some text");
    axios
      .get(`https://nekobot.xyz/api/imagegen?type=clyde&text=${args.join(" ")}`)
      .then((res) => {
        const embed = new MessageEmbed().setImage(res.data.message);
        message.inlineReply(embed);
      });
  },
};
