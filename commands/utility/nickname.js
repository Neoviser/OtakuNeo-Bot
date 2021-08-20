// Neo#0442

const {
  MessageEmbed
} = require('discord.js') // duh
const {
  MessageButton
} = require('discord-buttons') // npm i discord-buttons

module.exports = {
  name: 'nickname', // name ofc
  aliases: ['nick'], // if someone types this instead
  description: 'Change NickName', // meh optional
  cooldown: 5,

  execute: async (message, args, client) => {

    const member = message.member
    const name = args.join(' ') // for our nickname
    if (!name) return message.reply(`Please specify a nickname!`) // if theres no nickname

    if (name.length > 32) return message.reply(`Your name can't be longer than 32 letters!`) // you know what this does
    if (name.length < 2) return message.reply(`You name can't be shorter than 2 letters!`) // this too

    const embed1 = new MessageEmbed()
      .setAuthor(member.user.username, member.user.displayAvatarURL({
        dynamic: true
      }))
      .setTimestamp()
      .setColor('PURPLE')
      .setDescription(`
<@${member.user.id}> Wants to change their nickname to **${name}**

React below within 30 seconds
            `)

    const embed2 = new MessageEmbed()
      .setTitle("Request Cancelled.")
      .setColor("#FF0000")
      .setTimestamp()

    const embed3 = new MessageEmbed()
      .setTitle(`Successfully changed nickname to **${name}**`)
      .setColor("#27FF00")
      .setTimestamp()

    const button1 = new MessageButton()
      .setStyle('green') // colour of the button
      .setID('yes') // making it a function
      .setLabel('Yes, Change') // label or text in the button

    const button2 = new MessageButton()
      .setStyle('red')
      .setID('no')
      .setLabel('No, Don\'t Change')

    message.channel.send({
      buttons: [button1, button2],
      embed: embed1
    }).then(message => { // send embed and buttons
      const filter = (button) => button.clicker.user.id === member.id // checking if its the same user who used the command
      const collector = message.createButtonCollector(filter, {
        time: 30000
      }) // 30 seconds timer

      collector.on('collect', async b => {
        b.defer()
        if (b.id === 'yes') { // if user clicks yes
          member.setNickname(name)
          b.channel.send(embed3)
          collector.stop()
        } else if (b.id === 'no') { // if user clicks no
          b.channel.send(embed2)
          collector.stop()
        }
      })
    })
  }
}