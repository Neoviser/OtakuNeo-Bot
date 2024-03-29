const { MessageEmbed } = require("discord.js"); // npm i discord.js
const fetch = require("node-fetch"); // npm i node-fetch

module.exports = {
  // Update To Your Handler
  name: "wikipedia",
  aliases: ["wiki"], // You Can Keep Any Name
  description: "Search Any Thing On WikiPedia.", // Optional
  cooldown: 5,

  execute: async (message, args, client) => {
    // Update To Your Handler

    const wiki = args.slice().join(" ");
    if (!wiki) return message.inlineReply("Sorry~! Provide a query to search."); // If No Topic Provided To Searched
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
      wiki
    )}`; // From Here BOT Will Search For Searched Topic

    let response;
    try {
      response = await fetch(url).then((res) => res.json()); // Getting Result
    } catch (e) {
      return message.inlineReply("An Error Occured, Try Again."); // If Error Occur's
    }

    try {
      if (response.type === "disambiguation") {
        // If Their Are Many Results With Same Searched Topic
        const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle(response.title) // Title Of Topic
          .setURL(response.content_urls.desktop.page) // URL Of Searched Topic
          .setDescription([
            `
                ${response.extract}
                Links For Topic You Searched [Link](${response.content_urls.desktop.page}).`,
          ]);
        message.inlineReply(embed);
      } else {
        // If Only One Result
        const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle(response.title) // Title Of Topic
          .setURL(response.content_urls.desktop.page) // URL Of Searched Topic
          .setThumbnail(response.thumbnail.source)
          .setDescription(response.extract);
        message.inlineReply(embed);
      }
    } catch {
      return message.inlineReply(
        "Provide a **valid** or **existing** query to search."
      ); // If Searched Topic Is Not Available
    }
  },
};
