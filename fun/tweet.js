const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: "tweet",
    description: "tweet something on twitter!",
    category: "fun",
    usage: "tweet <txt>",
    run: async(client, message, args) => {

      if(!args[0]) return message.reply(`Please text something to tweet!`)

        fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${args.join(' ')}`)
        .then((res) => res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setTitle(":bird: Tweeted!")
            .setImage(`${data.message}`)
            .setColor('BLUE')
            .setTimestamp()
            message.channel.send(embed)
            message.react(`🐦`)
        })
    }
}