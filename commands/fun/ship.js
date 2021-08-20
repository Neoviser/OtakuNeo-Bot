const Discord = require('discord.js')

module.exports = {
    name: "ship",
    aliases: ['love'],
    description: "A command based on love percentage!",
    cooldown: 5,

    async execute(message, args) {

    // Variables
    const shipTarget1 = (args[0])
    const shipTarget2 = (args[1])

        // Input Checking
          const noInput12 = new Discord.MessageEmbed()
            .setDescription('Please specify 2 users or values!')
            .setColor('RED')
          if (!shipTarget1) return message.channel.send(noInput12)

          const noInput21 = new Discord.MessageEmbed()
            .setDescription('Please specify 2 users or values!')
            .setColor('RED')
          if (!shipTarget2) return message.channel.send(noInput21)

          // Executing
          const shipEmbed = new Discord.MessageEmbed()
            .setTitle('💗 | MatchMaking | 💗')
            .setDescription(`
            🔻 | ${shipTarget1} \n🔺 | ${shipTarget2}
            `)
            .setColor('d1c8c4')
            .addField('MatchMaking Result', (`
              Their love-score is ${Math.floor(Math.random() * 100)}%! 💘
            `))
            .setFooter('Ship Command', message.guild.iconURL())
            message.channel.send(shipEmbed)
      }
    }