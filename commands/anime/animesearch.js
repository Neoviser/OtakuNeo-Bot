const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "anime",
  category: "other",
  aliases: ["kitsu"],
  description: "Get anime information",
  cooldown: 5,
  execute: (message, args) => {
    if (!args.length) {
      return message.inlineReply("Please give a valid anime!");
    }
    //DEFINE OPTIONS

    let option = {
      url: `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`,
      method: `GET`,
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",
      },
      json: true,
    };

    message.inlineReply("Please wait while I fetch info...").then((msg) => {
      get(option).then((body) => {
        try {
          let embed = new MessageEmbed()
            .setTitle(body.data[0].attributes.titles.en)
            .setColor("RED")
            .setDescription(body.data[0].attributes.synopsis)
            .setThumbnail(body.data[0].attributes.posterImage.original)
            .addField("Ratings", body.data[0].attributes.averageRating)
            .addField("TOTAL EPISODES", body.data[0].attributes.episodeCount);
          //.setImage(body.data[0].attributes.coverImage.large)
          //try it

          message.inlineReply(embed);
          msg.delete();
        } catch (err) {
          msg.delete();
          return message.inlineReply("Unable to find this anime..");
        }
      });
    });
  },
};
