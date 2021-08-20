const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "cmm",
  description: "Make your own Change my mind meme",
  aliases: ["changemymind"],
  cooldown: 5,
  async execute(message, args) {
    const text1 = new MessageEmbed()
      .setTitle("You need to provide a text.")
      .setColor("#c98aff")
      .setTimestamp();
    let lettext1 = args.join(" ");
    if (!lettext1) return message.inlineReply(text1);
    let link = await fetch(
      `https://vacefron.nl/api/changemymind?text=${lettext1} `
    );
    let embed = new MessageEmbed()
      .setImage(link.url)
      .setColor("#c98aff")
      .setTimestamp();

    message.inlineReply(embed).catch((e) => {
      console.log(e);
      return message.inlineReply("Something went wrong!");
    });
  },
};
