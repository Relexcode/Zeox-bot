const { Client, Message, MessageEmbed } = require('discord.js');
const { MessageButtons, MessageButton } = require('discord-buttons');
module.exports = {
    name: 'buttons',
    run: async(client, message, args) => {
        const button1 = new MessageButton()
        .setStyle('green')
        .setLabel("send 'i like green")
        .setID('button1')

        const button2 = new MessageButton()
        .setStyle('red')
        .setLabel("send 'i like red")
        .setID('button2')

        message.channel.send('click this button for a epic response', {
            buttons: [button1, button2]
        })

  
    },
};

