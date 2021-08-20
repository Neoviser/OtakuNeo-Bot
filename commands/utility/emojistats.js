module.exports = {
    name: "emoji-stats",
    description: "Gives the overall emoji stats of a server based on server boosting.",
    category: "utility",
    aliases: ["emojiinfo", "emoji-info"],
    guildOnly: true,
    cooldown: 3,
    execute(message, args) {
      // Getting the total number of emotes depending.
      // The boost level of a server (which is the premium tier.)
      const serverPremiumTier = [
        100,
        200,
        300,
        500
      ]
  
      // Destructuring the guild object to the message parameter
      const {
        guild
      } = message
  
      // Value of maximum number of emotes depending on server's premium tier.
      // ex. Tier 1 --> 200 emotes slot available
      // Tier 3 --> 500 emotes slot available 
      const emojiListBasedOnPremiumTier = serverPremiumTier[guild.premiumTier]
  
      // --------------------------------------------------------------------------------------------------------------------------------------------------
      const amountOfStaticEmojis = guild.emojis.cache.filter(emoji => !emoji.animated).size
      const maximumAmountOfStaticEmojis = emojiListBasedOnPremiumTier / 2
      const leftStaticEmojis = `${emojiListBasedOnPremiumTier / 2 - guild.emojis.cache.filter(emoji => !emoji.animated).size} left`
      const staticEmojiPercentage = `${((guild.emojis.cache.filter(emoji => !emoji.animated).size / (emojiListBasedOnPremiumTier / 2)) * 100).toFixed(2)}%`
  
      const amountOfAnimatedEmojis = guild.emojis.cache.filter(emoji => emoji.animated).size
      const maximumAmountOfAnimatedEmojis = emojiListBasedOnPremiumTier / 2
      const leftAnimatedEmojis = `${emojiListBasedOnPremiumTier / 2 - guild.emojis.cache.filter(emoji => emoji.animated).size} left`
      const animatedEmojiPercentage = `${((guild.emojis.cache.filter(emoji => emoji.animated).size / (emojiListBasedOnPremiumTier / 2)) * 100).toFixed(2)}%`
  
      const amountOfTotalEmojis = guild.emojis.cache.size
      const maximumAmountOfTotalEmojis = emojiListBasedOnPremiumTier
      const leftTotalEmojis = `${emojiListBasedOnPremiumTier - guild.emojis.cache.size} left`
      const totalEmojiPercentage = `${((guild.emojis.cache.size / emojiListBasedOnPremiumTier) * 100).toFixed(2)}%`
      // ---------------------------------------------------------------------------------------------------------------------------------------------------
  
      const staticEmojisBasedOnPremiumTier = `${amountOfStaticEmojis} / ${maximumAmountOfStaticEmojis} | ${leftStaticEmojis} ${staticEmojiPercentage}`
      const animatedEmojisBasedOnPremiumTier = `${amountOfAnimatedEmojis} / ${maximumAmountOfAnimatedEmojis} | ${leftAnimatedEmojis} ${animatedEmojiPercentage}`
      const totalEmojisBasedOnPremiumTier = `${amountOfTotalEmojis} / ${maximumAmountOfTotalEmojis} | ${leftTotalEmojis} ${totalEmojiPercentage}`
  
      const emojiStatsEmbed = {
        title: `${message.guild.name}\'s Emoji stats`,
        thumbnail: {
          url: message.guild.iconURL({
            dynamic: true,
            size: 4096,
          })
        },
        fields: [{
            name: "Normal Emotes",
            value: staticEmojisBasedOnPremiumTier,
            inline: true
          },
          {
            name: '\u200b',
            value: '\u200b',
            inline: true
          },
          {
            name: "Animated Emotes",
            value: animatedEmojisBasedOnPremiumTier,
            inline: true
          },
          {
            name: '\u200b',
            value: '\u200b',
            inline: true
          },
          {
            name: "Total Emotes",
            value: totalEmojisBasedOnPremiumTier,
            inline: true
          },
          {
            name: '\u200b',
            value: '\u200b',
            inline: true
          },
        ]
      }
  
      message.channel.send({
        embed: emojiStatsEmbed
      })
    }
  }