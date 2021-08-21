const Discord = require("discord.js");
const client = new Discord.Client({
  allowedMentions: {
    // set repliedUser value to `false` to turn off the mention by default
    repliedUser: false,
  },
});
const handler = require("./handlers/commands.js");
const fs = require("fs");
client.commands = new Discord.Collection();
require("./functions/extendedMessage");

handler(client);

fs.readdir("./events", (err, files) => {
  if (err) return console.log(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

client.on("message", (message) => {
  // Reply when Pinged
  if (message.mentions.users.has(client.user.id) && !message.author.bot) {
    message.inlineReply(
      "Hello! My prefix is `n!`! If you need help, type `n!help`! ;3"
    );
    return;
  }
});

client.login(process.env.token); // Login Into Discord Bot
