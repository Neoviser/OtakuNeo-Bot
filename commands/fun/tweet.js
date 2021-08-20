const Discord = require("discord.js")
const fetch = require("node-fetch");

module.exports = {
    name: 'tweet',
    description: 'Makes your message into a tweet',

execute: async(message, args) => {
    const m = await message.channel.send("Processing...")
        let user = args[0];
        let text = args.slice(1).join(" ");


        if(!user){
            return m.edit("**You Have To Enter Someone's Twitter Nickname!**");
        }

        if(!text){
            return m.edit("**You must enter a message!**");
        }

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "tweet.png");
            await message.channel.send(``, attachment);
            m.delete();
        } catch(e){
            m.edit("Error, Try Again! Mention Someone");
        }
}};