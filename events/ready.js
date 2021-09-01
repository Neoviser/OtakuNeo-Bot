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
        value: ["null"], // values
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
        value: ["null"],
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

  const statusArray = [
    "your commands! | @OtakuNeo, LISTENING",
    "my source code! | @OtakuNeo, WATCHING",
    "8ball with myself.. | @OtakuNeo, PLAYING",
    "your anime commands! | @OtakuNeo, WATCHING",
    "the latest hits! | @OtakuNeo, LISTENING",
  ]; //What you want your statuses to be after puting the status name put a coma and a space and then the type what you want it to be note: please dont to it to STREAMING as you would have to input a twitch link

  setInterval(() => {
    client.user.setStatus("dnd");
    const random =
      statusArray[Math.floor(Math.random() * statusArray.length)].split(", ");
    const status = random[0];
    const mode = random[1];
    client.user.setActivity(status, { type: mode });
  }, 300000); //your time of changing status in miliseconds for example 1 second = 1000 ms
};
