const {
  readdirSync
} = require("fs");
const colour = require('cdcolours');
module.exports = (client) => {
  readdirSync("./commands/").map((dir) => {
    const commands = readdirSync(`./commands/${dir}/`).map((cmd) => {
      let pull = require(`../commands/${dir}/${cmd}`);
      console.log(colour(`${pull.name} Command Loaded`, {
        textColour: 'green'
      }));
      client.commands.set(pull.name, pull);
    });
  });
};