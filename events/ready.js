const log = require("../functions/log");

module.exports = async (client) => {
  log(
    [
      {
        name: "Client", // name
        value: [`Logged in as ${client.user.tag}`], // values
      },
      {
        name: "Data", // name
        value: [
          `Active with ${client.users.cache.size} users`,
          `I'm in ${client.guilds.cache.size} servers`,
          `${client.channels.cache.size} channels`,
        ], // values
      },
      {
        name: "Database", // name
        value: ["Connected to Mongo"], // values
      },
    ],
    68,
    {
      end: false,
    }
  ); // options

  log(
    [
      {
        value: ["Connected to Atlas"],
      },
    ],
    68,
    {
      justValue: true,
      end: true,
    }
  );
  /* We just add a value, and end it here
	   Useful if you want to log when it connects
	   */

  client.user.setActivity(`to 2.1k users! | =help`, {
    type: "STREAMING",
    url: "https://www.twitch.tv/otakuneo",
  });
};
