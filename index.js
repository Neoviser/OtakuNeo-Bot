const Discord = require("discord.js");
const client = new Discord.Client();
const handler = require("./handlers/commands.js");
const fs = require("fs");
require("discord-buttons")(client);
client.commands = new Discord.Collection();

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
    message.reply(
      "Hello! My prefix is `=`! If you need help, type `=help`! ;3"
    );
    return;
  }
});

client.login(process.env.DJS_TOKEN); // Login Into Discord Bot
