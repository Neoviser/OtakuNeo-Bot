const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "djs",
  aliases: ["djslibrary"],
  execute: async (message, args) => {
    // Variables
    const msg = message;
    let query = args.join(" ");

    // Input Checking
    if (!query[0]) {
      message.inlineReply(
        "<:djs:825580333146570752> **Please specify what do you want to search in the Discord.JS library!**"
      );
    } else {
      // Executing
      const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${query}`;
      fetch(url)
        .then((res) => res.json())
        .then((embed) => {
          if (embed && !embed.error) {
            message.inlineReply({ embed });
          } else {
            message.inlineReply(
              `Sorry~! Failed to find anything using the specified query in DiscordJS library. Please try again.`
            );
          }
        })
        .catch((err) => {
          this.client.logger.error(err);
          message.inlineReply("An error occured.. My biggest apologies..");
        });
    }
  },
};
