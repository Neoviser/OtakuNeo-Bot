module.exports = {
  name: "shut-down",
  description: "vine boom sound effect",
  aliases: ['shut-off', 'shutdown', 'restart'],
  async execute(msg, args) {
    if (msg.author.id != "403848689480761354") return msg.channel.send("You do not have the following permissions to use this command!")
    try {
      await msg.channel.send("Bot is shutting down...")
      process.exit()
    } catch (e) {
      msg.channel.send(`ERROR: ${e.message}`)
    }

  }
}