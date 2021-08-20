const Discord = require("discord.js");
const client = Discord.Client();

client.on("message", (message) => {
  // Reply when Pinged
  if (message.mentions.users.has(client.user.id) && !message.author.bot) {
    message.reply(
      "Hello! My prefix is `=`! If you need help, type `=help`! ;3"
    );
    return;
  }
});
