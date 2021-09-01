const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["commands"],
  cooldown: 5,
  execute: async (message, args, client) => {
    const embed = new MessageEmbed()
      .setTitle("I've sent you a DM!")
      .setColor("PURPLE")
      .setTimestamp();

    const embed2 = new MessageEmbed()
      .setTitle("Want to suggest something?")
      .setDescription(
        "If you have any suggestions or want to report a bug, please DM me! Neo#0442"
      )
      .setFooter("Closed Pre-Alpha v1.3, Running on Discord.js v12")
      .setColor("E985FF")
      .setTimestamp();

    const embed3 = new MessageEmbed()
      .setTitle("Invite me~!")
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=791492694852763649&permissions=140193950785&scope=bot%20applications.commands"
      )
      .setAuthor("Help Menu")
      .setFooter("Made by Neo#0442")
      .setTimestamp()
      .setColor("E985FF")
      .setDescription("These are my supported commands!")
      .addFields(
        {
          name: "🎉 Fun",
          value:
            "`changemymind`, `uwu`, `youtubecomment`, `darkyoutubecomment`, `triggered`, `stickbug`, `tweet`, `sudo`, `clyde`, `deepfry`",
          inline: false,
        },
        {
          name: "🎮 Games",
          value: "`8ball`, `rps`, `slots`",
          inline: false,
        },
        {
          name: "🎭 Roleplay",
          value: "`hug`, `cuddle`, `slap`, `pat`, `ship`",
          inline: false,
        },
        {
          name: "💢 Anime",
          value:
            "`animequotes`, `animesearch`, `animecharacter`, `foxgirl`, `neko`, `waifu`, `kemonomimi`",
          inline: false,
        },
        {
          name: "➕ Other",
          value: "`ascii`, `emojify`, `emoji`",
          inline: false,
        },
        {
          name: "🧰 Utility",
          value: "`help`, `avatar`, `server`, `emojiinfo`, `invites`",
          inline: false,
        },
        {
          name: "🌐 Web Search",
          value:
            "`djslibrary`, `mcuser`, `steam`, `twitter`, `wikipedia`, `youtube`",
          inline: false,
        },
        {
          name: "🔞 NSFW",
          value: "||eroNeko, eroYuri, nsfwNeko, nsfwNekoGif, yuri||",
          inline: false,
        }
      );
    message.inlineReply(embed);
    message.author
      .send(embed3)
      .catch(() =>
        message.inlineReply(
          "Hey uhm.. I can't send you a DM if you disabled it, please turn it on!"
        )
      );
    message.author.send(embed2);
  },
};
